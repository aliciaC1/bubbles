const db = require("../models");
const crypt = require('js-sha512');

const generateKey = () => {
  let sessionID = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    sessionID += characters.charAt(Math.floor(Math.random() * 32));
  }
  sessionID = crypt.sha512(sessionID);
  return sessionID;
}

module.exports = {
  findAll: function (req, res) {
    db.User.find({})
      .populate("_bubbleId")
      .then(function (dbBubble) {
        // If we were able to successfully find Articles, send them back to the client
        console.log(dbBubble);
        res.json(dbBubble);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  register: function (req, res) {
    const { username } = req.body;

    const checkDuplicates = db.User.findOne({ username: username });
    const register = db.User.create(new db.User(req.body));

    checkDuplicates.then(function (response) {
      if (response) {
        res.location("/register");
        res.end();
      } else {
        register.then(function (result) {
          res.location("/login");
          res.end();
        });
      }
    });
  },
  login: function (req, res) {
    const { username, password } = req.body;
    const login = db.User.findOne({ username: username });
    login.then(function (response) {
      if (response.password == password) {
        const sessionTime = 3600000; //Default Session: 1 Hour
        const sessionID = generateKey();
        res.cookie("sessionID", sessionID, { httpOnly: true, expires: new Date(Date.now() + sessionTime) }); //Default Session: 1 Minute
        const update = db.User.findOneAndUpdate({ username: username }, { sessionID: sessionID, sessionExpired: false })
        update.then(function (response) {
          setTimeout(function () {
            const destroy = db.User.findOneAndUpdate({ username: username }, { sessionExpired: true });
            destroy.then(function (response) { console.log(`Session for ${response.username} has been deleted!`) });
          }, sessionTime);
          res.location("/dashboard");
          res.end();
        });
      } else {
        //incorrect password
        res.location("/dashboard");
        res.end();
      }
    })
  },
  home: function (req, res) {
    res.location("/login");
    res.end();
  }
};
