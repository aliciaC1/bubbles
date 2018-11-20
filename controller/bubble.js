const db = require("../models");

//Finds all bubbles associated with user.
const generateKey = () => {
  let sessionID = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    sessionID += characters.charAt(Math.floor(Math.random() * 32));
  }
  // sessionID = crypt.sha512(sessionID);
  return sessionID;
}

module.exports = {
  // Find one note
  findOne: function (req, res) {
      db.Bubble.findOne({ _id: req.params.id })
          .populate("_userId")
          .populate("_postId")
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
  create: function (req, res) {
    db.Bubble.create(req.body).then(function (dbBubble) {
      console.log(`Created Bubble ID: ${dbBubble._id}`);
      db.User.findOneAndUpdate({ sessionID: req.cookies.sessionID }, { $push: { _bubbleId: dbBubble._id}}, { new: true })
      .then(function (User) {
        // If we were able to successfully find Bubbles, send them back to the client
        console.log(`Updated User: ${User}`);
        const userID = User._id;
        db.Bubble.findOneAndUpdate({ _id: dbBubble._id }, { $push: { _userId: userID } }, { new: true })
          .then(function(Bubble) {
            console.log(`Updated Bubble: ${Bubble}`);
            res.json(Bubble);
          });
      })
      .catch(function(err) { res.json(err) })
    })
    .catch(function (err) {
      res.json(err);
    });
  },
  getInvite: function(req, res) {
    const { bubbleID } = req.params;
    //if user is logged in
    if(req.cookies.sessionID) {
      const User = db.User.findOne({ sessionID: req.cookies.sessionID });
      User.then(function(response) {
        //if user belongs to the current bubble
        if(response._bubbleId.includes(bubbleID)) {
          //generate invite link
          const password = generateKey();
          const expirationTime = 600000; //10 minutes
          const updateDB = db.findOneAndUpdate({ _id: bubbleID }, { inviteCode: password, inviteActive: true }, { new: true });
          updateDB.then(function(response) {
            setTimeout(function(){
              const destroy = db.User.findOneAndUpdate({ _id: bubbleID }, { inviteActive: false }, { new: true });
              destroy.then(function(response) { console.log(`Invite Link for ${response.name} has expired!`) });
            }, expirationTime);
            const domain = "localhost.com/3001"
            res.send(domain + "/api/bubble/" + bubbleID + "/" + password);
          })
        }
      })
    } else {
      //must set window.location to headers.location on client side
      res.location("/login")
      res.end();
    }
  },
  join: function(req, res) {
    if(req.cookies.sessionID) {
      const { bubbleID, invite } = req.params;
      const Bubble = db.Bubble.findOne({ inviteCode: invite });
      Bubble.then(function(bubble) {
        if(response.inviteActive) {
          const User = db.User.findOneAndUpdate({ sessionID: req.cookies.sessionID }, { $push: { _bubbleId: bubbleID } }, { new: true });
          User.then(function(user) {
            const Update = db.Bubble.findOneAndUpdate({ inviteCode: invite }, { $push: { _userId: response._id } }, { new: true });
            Update.then(function(update) {
              res.redirect("/dashboard");
            })
          })
        } else {
          res.send("<h1> Invite Link has Expired! </h1>");
        }
      })
    }
  }
};
