const express = require("express");
const logger = require('morgan');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("./models");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Use morgan logger for logging requests
app.use(logger("dev"));
// Configure body parsing for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(require('cookie-parser')())

app.use(require("express-session")({
    secret: "Hello World, this is a session",
    resave: false,
    saveUninitialized: false
}));

// Serve up static assets
/*
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
*/

app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// app.use(express.static("public"));

passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/bubble",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

/*
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
*/

// Start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
