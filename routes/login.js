const app = require('express').Router();
const passport = require("passport");
const db = require("./../models");
const path = require("path");

//handling user sign up
app.route("/register").post(function (req, res) {
    /*
    db.User.register(req.body)
        .then(function (dbUser) {
            // If saved successfully, send the the new User document to the client
            //res.json(dbUser);
            passport.authenticate("local")(req, res, function () {
                res.redirect("/dashboard"); //once the user sign up
            });
        })
        .catch(function (err) {
            // If an error occurs, send the error to the client
            res.json(err);
        });
    */
   db.User.register(new db.User(req.body),req.body.password, function(err, user){
    if(err){
         console.log(err);
         return res.render('register');
     } //user stragety
     passport.authenticate("local")(req, res, function(){
         res.redirect("login"); //once the user sign up
    });
 });
});

app.route('/cookie').get(function (req, res) {
  res.cookie("auth_spotify", "helloWorld");
  res.send(req.cookies.auth_spotify);
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/login",
    failureRedirect: "/fuck"
}), function (req, res) {
    res.send("User is " + req.user.id);
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "../public/login.html"));
})

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

/*
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("dashboard");
    console.log("Logged In");
}

app.get("/dashboard",isLoggedIn, function(req, res){
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});
*/



module.exports = app;
