

/*
const router = require("express").Router();
const apiRoutes = require("./api");
const viewRoutes = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;

*/

const router = require("express").Router();
const dashboardRoute = require("./dashboard");
const bubbleRoute = require("./bubble");
const postRoute = require("./post");
const userRoute = require("./user");
const path = require('path');
const db = require('../models');
const cookies = require('cookie-parser');

//Allows Server to Parse and Read through Cookies
router.use(cookies());

//EXAMPLE CODE FOR AUTHENTICATION-----------------------------------------------
const reactClient = path.join(__dirname, "../client/build/index.html");

const Authenticate = (session) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({ sessionID: session }).then(function(response) {
      if(response) {
        console.log(response);
        if(response.tokenExpired) { resolve(false) } else { resolve(true) }
      } else {
        resolve(false)
      };
    });
  })
}

router.route("/bubbles").get(function(req, res) {
  //Pass in the User's Session ID from Cookies
  Authenticate(req.cookies.sessionID)
  .then(pass => !pass ? res.send("403 FORBIDDEN ENTRY") : res.sendFile(reactClient));
  // if it returns false, deny access
  // if it returns true, assuming there's a "/privateRoute" in the react-router-dom in app.js, it will lead them there
  // (send them the react app)
});
//(END OF) EXAMPLE CODE FOR AUTHENTICATION------------------------------------------------

router.use("/", dashboardRoute);
router.use("/", bubbleRoute);
router.use("/", postRoute);
router.use("/", userRoute);

router.use(function(request, response) {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
