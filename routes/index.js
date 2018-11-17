

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
const loginRoute = require("./login");
const registerRoute = require("./register");
const path = require('path');

//EXAMPLE CODE FOR AUTHENTICATION-----------------------------------------------
const reactClient = path.join(__dirname, "../client/build/index.html");

const Authenticate = (session) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({ sessionID: session }).then(response => {
      if(response) {
        console.log(response);
        if(response.tokenExpired) { resolve(false) } else { resolve(true) }
      } else {
        resolve(false)
      };
    });
  })
}

router.route("/privateRoute").get(function(req, res) {
  //Pass in the User's Session ID from Cookies
  Authenticate(req.cookies.sessionID)
  .then(pass => !pass ? res.send("403 FORBIDDEN ENTRY") : res.sendFile(react));
  //if it returns false, deny access
  //if it returns true, assuming there's a "/privateRoute" in the react-router-dom in app.js, it will lead them there
  //(send them the react app)
});
//(END OF) EXAMPLE CODE FOR AUTHENTICATION------------------------------------------------

router.use("/", dashboardRoute);
router.use("/", bubbleRoute);
router.use("/", postRoute);
router.use("/", loginRoute);
router.use("/", registerRoute);

module.exports = router;
