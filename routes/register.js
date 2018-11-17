const router = require("express").Router();
const db = require("../models");

router.route("/register").post(function (req, res) {
  if(req.body.password == "") {
    res.redirect("/register");
  } else {
    db.User.register(new db.User(req.body), req.body.password, function(err, user){
      if (err) { console.log(err); }
      // res.redirect("/login")

      //TEMP CODE
      res.send("You have been successfully registered!")
    });
  }
});
module.exports = router;
