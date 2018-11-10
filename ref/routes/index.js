var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index", {
    user: req.session.user
  });
});

router.get("/logout", function(req, res) {
  req.session.destroy(function() {
    res.redirect("/");
  });
});

module.exports = router;
