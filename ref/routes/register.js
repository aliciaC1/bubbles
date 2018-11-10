var express = require("express");
var hash = require("pbkdf2-password")();
var validator = require("email-validator");

var db = require("../db/models");

var router = express.Router();

function register(name, email, pass, fn) {
  hash({ password: pass }, function(err, pass, salt, hash) {
    if (err) {
      return fn(err);
    }
    db.User.findOne({
      where: {
        username: email
      }
    }).then(function(userResult) {
      if (userResult) {
        return fn(new Error("A user with that email already exists!"));
      }
      console.log("EMAIL IS " + email);
      db.User.create({
        name: name,
        email: email,
        username: email,
        salt: salt,
        hash: hash
      }).then(function(result) {
        return fn(null, result);
      });
    });
  });
}

router.use(function(req, res, next) {
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

router.get("/", function(req, res) {
  res.render("register", {
    helpers: {
      errorField: function() {
        return;
      }
    }
  });
});

router.post("/", function(req, res) {
  var name = req.body.name.trim();
  var email = req.body.email.trim();
  var password = req.body.password.trim();
  var passwordConf = req.body.password_conf.trim();
  var errorFields = {};
  if (!name) {
    errorFields.name = "Full name is required.";
  } else {
    res.locals.name = name;
  }
  if (!email) {
    errorFields.email = "E-mail address is required.";
  } else if (!validator.validate(email)) {
    errorFields.email = "E-mail address is invalid.";
  } else {
    res.locals.email = email;
  }
  if (!password) {
    errorFields.password = "Password is required.";
  } else if (password !== passwordConf) {
    errorFields.passwordConf = "Password do not match.";
  }
  if (Object.keys(errorFields).length > 0) {
    res.render("register", {
      errorFields: errorFields,
      helpers: {
        errorField: function(err) {
          if (typeof err !== "undefined") {
            return "<p class='text-danger'>" + err + "</p>";
          }
        }
      }
    });
    return;
  }
  register(name, email, password, function(err, user) {
    if (user) {
      req.session.regenerate(function() {
        req.session.user = user;
        req.session.success =
          "Authenticated as " +
          user.name +
          " click to <a href='/logout'>logout</a>. " +
          " You may now access <a href='/restricted/search'>HAGG search</a>.";
        res.redirect("/restricted/search");
      });
    } else {
      if (err) {
        req.session.error = err.message;
      }
      res.redirect("back");
    }
  });
});

module.exports = router;
