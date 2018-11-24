const router = require("express").Router();
const dashboardRoute = require("./dashboard");
const bubbleRoute = require("./bubble");
const postRoute = require("./post");
const commentRoute = require("./comment")
const userRoute = require("./user");
const path = require('path');
const db = require('../models');

//Allows Server to Parse and Read through Cookies
const cookies = require('cookie-parser');
router.use(cookies());

//Makes All Routes except public routes require authentication
const publicRoutes = ["/", "/login", "/register"];
const Authenticate = require('./../controller/authenticate.js');

router.route("*").all(function (req, res, next) {
  // next(); is similar to continue in a for loop but for express,
  //it just continues to the next set of routes below
  if (publicRoutes.includes(req.path)) { next(); }
  else {
    Authenticate(req.cookies.sessionID).then(function (authorized) {
      if (authorized) { console.log("User is authorized"); next(); }
      else {
        //DO NOT REDIRECT, USE RES.SEND(); ~WM
        res.send("<h1>403 Forbidden</h1><h3>You don't have permission to access " + req.path + "</h3>");
      }
    });
  }
})

//Public Routes
router.use("/", userRoute);

//Protected Routes
router.use("/", bubbleRoute);
router.use("/", dashboardRoute);
router.use("/", postRoute);
router.use("/", commentRoute);

router.use(function (request, response) {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
