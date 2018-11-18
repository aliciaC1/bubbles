const router = require("express").Router();
const db = require("../models");

router.route("/register").post(function (req, res) {
    const { username } = req.body;

    const checkDuplicates = db.User.findOne({ username: username });
    const register = db.User.create(new db.User(req.body));

    checkDuplicates.then(function(response) {
      if(response) {
        res.location("/register");
        res.end();
      } else {
        register.then(function(result) {
          res.location("/login");
          res.end();
        });
      }
    });
});

module.exports = router;
