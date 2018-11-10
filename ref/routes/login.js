var express = require("express");
var hash = require("pbkdf2-password")();
var authClient = require("google-auth-library");

var db = require("../db/models");

var router = express.Router();

var client = new authClient.OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.use(function (req, res, next) {
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = "";
  if (err) {
    res.locals.message = "<p>" + err + "</p>";
  }
  if (msg) {
    res.locals.message = "<p>" + msg + "</p>";
  }
  next();
});

function authenticate(email, pass, fn) {
  db.User.findOne({
    where: {
      email: email
    }
  })
    .then(function (userResult) {
      if (!userResult) {
        return fn(new Error("cannot find user"));
      }
      hash(
        {
          password: pass,
          salt: userResult.salt
        },
        function (err, pass, salt, hash) {
          if (err) {
            return fn(err);
          }
          if (hash === userResult.hash) {
            return fn(null, userResult);
          }
          return fn(new Error("invalid password"));
        }
      );
    })
    .catch(function (err) {
      console.log(err);
      return fn(new Error(err.message));
    });
}

router.get("/", function (req, res) {
  res.render("login");
});

router.post("/", function (req, res) {
  authenticate(req.body.email.trim(), req.body.password.trim(), function (
    err,
    user
  ) {
    if (user) {
      req.session.regenerate(function () {
        req.session.user = user;
        req.session.success =
          "Authenticated as " +
          user.email +
          " click to <a href='/logout'>logout</a>. " +
          " You may now access <a href='/restricted/search'>HAGG search</a>.";
        res.redirect("/restricted/search");
      });
    } else {
      req.session.error =
        "Authentication failed, please check your username and password.";
      res.redirect("back");
    }
  });
});

router.post("/google", function (req, res) {
  function verify() {
    return new Promise(function (resolve, reject) {
      client.verifyIdToken({
        idToken: req.body.token,
        audience: process.env.GOOGLE_CLIENT_ID,
        scope: "profile email"
      }).then(function (ticket) {
        resolve(ticket.getPayload());
      }).catch(function (err) {
        reject(err);
      });
    });
  }
  verify()
    .then(function (payload) {
      req.session.regenerate(function () {
        req.session.user = {
          username: payload["sub"],
          name: payload["name"],
          email: payload["email"]
        };
        return res.json(req.session.user);
      });
    })
    .catch(function (err) {
      console.error(err);
      res.status(500).end();
    });
});

module.exports = router;
