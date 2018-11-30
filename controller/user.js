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

  findOne: function (req, res) {
    db.User.findOne({ username: req.body.username })
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
  register: async function (req, res) {
    const check = await db.User.findOne({ username: req.body.username });
    if (check) {
      res.send("404"); //Problem with Registration (Username in Use, Passwords Don't Match etc.)
    } else {
      const register = await db.User.create(new db.User(req.body));
      console.log(`${register.username} has been successfully registered!`);
      res.location("/login");
      res.end();
    }
  },
  login: async function (req, res) {
    const { username, password } = req.body;
    const login = await db.User.findOne({ username: username });
    if (login) {
      if (login.password == password) {
        const sessionTime = 3600000; //Default Session: 1 Hour
        const sessionID = generateKey();
        res.cookie("sessionID", sessionID, { httpOnly: true, expires: new Date(Date.now() + sessionTime) });
        const update = await db.User.updateOne({ username: username }, { sessionID: sessionID, sessionExpired: false });
        setTimeout(async function () {
          const destroy = await db.User.updateOne({ username: username }, { sessionExpired: true });
          console.log(`Session for ${destroy} has been deleted!`)
        }, sessionTime);
        res.location("/dashboard");
        res.end();
      } else {
        res.send("404");
      }
    }
  },
  logout: async function (req, res) {
    const Session = await db.User.updateOne({ sessionID: req.cookies.sessionID }, { sessionExpired: true });
    res.redirect("/");
  },
  findUser: async function (req, res) {
    console.log("I love ponies")
    const { sessionID } = req.cookies;
    const User = await db.User.findOne({ sessionID: sessionID });
    res.send(User);
    console.log(User);
  }
};
