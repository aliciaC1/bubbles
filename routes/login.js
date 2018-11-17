const router = require("express").Router();
const db = require("../models");

router.route("/").post(function(req, res) {
  const { username, password } = req.body;
  const sessionTime = 60000; //Default Session: 1 Minute
  db.User.findOne({ username: username })
    .then(response => {
      if(response.password == password) {
        //Generate SessionID
        let sessionID = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 32; i++) {
          sessionID += characters.charAt(Math.floor(Math.random() * 32));
        }
        sessionID = crypt.sha512(sessionID);
        //(END OF) Generate SessionID (START OF) Push to Browser's Cookie
        res.cookie("sessionID", sessionID, { httpOnly: true, expires: new Date(Date.now() + sessionTime)}); //Default Session: 1 Minute
        res.redirect("/bubbles")
        db.User.findOneAndUpdate({ username: username }, { sessionID: sessionID, sessionExpired: false })
          .then(response => {
            //Deletes the sessionID for User after ${sessionTime} has passed
            setTimeout(function(){
              db.User.findOneAndUpdate({ username: username }, { sessionExpired: true })
              .then(response => console.log(`Session for ${response.username} has been deleted!`);
            }, sessionTime);
          })
          .catch(err => assert.ok(err));
      } else {
        res.send("Incorrect Password");
      }
    })
    .catch(err => assert.ok(err));
})

module.exports = router;
