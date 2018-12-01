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
      .populate("_imageId")
      .then(function (dbBubble) {
        // If we were able to successfully find Articles, send them back to the client
        console.log("--------------------------------");
        console.log(dbBubble);
        console.log("--------------------------------");
        res.json(dbBubble);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  findAll: function (req, res) {
    db.Bubble.find({})
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
      db.User.findOneAndUpdate({ sessionID: req.cookies.sessionID }, { $push: { _bubbleId: dbBubble._id } }, { new: true })
        .then(function (User) {
          // If we were able to successfully find Bubbles, send them back to the client
          console.log(`Updated User: ${User}`);
          const userID = User._id;
          db.Bubble.findOneAndUpdate({ _id: dbBubble._id }, { $push: { _userId: userID } }, { new: true })
            .then(function (Bubble) {
              console.log(`Updated Bubble: ${Bubble}`);
              res.json(Bubble);
            });
        })
        .catch(function (err) { res.json(err) })
    })
      .catch(function (err) {
        res.json(err);
      });
  },
  getInvite: function (req, res) {
    const { bubbleID } = req.params;
    //if user is logged in
    if (req.cookies.sessionID) {
      console.log("Number")
      const User = db.User.findOne({ sessionID: req.cookies.sessionID });
      User.then(function (response) {
        console.log("Number")
        console.log(typeof response._bubbleId.toString())
        console.log(typeof bubbleID);
        //if user belongs to the current bubble
        if (response._bubbleId.toString().includes(bubbleID)) {
          console.log("Number")

          //generate invite link
          const password = generateKey();
          const expirationTime = 600000; //10 minutes
          const updateDB = db.Bubble.findOneAndUpdate({ _id: bubbleID }, { inviteCode: password, inviteActive: true }, { new: true });
          updateDB.then(function (response1) {
            console.log(response1)

            setTimeout(function () {
              const destroy = db.User.findOneAndUpdate({ _id: bubbleID }, { inviteActive: false }, { new: true });
              destroy.then(function (response) { console.log(`Invite Link for ${response.name} has expired!`) });
            }, expirationTime);
            const domain = "bubbles-b.herokuapp.com"
            res.send(domain + "/api/bubble/" + bubbleID + "/" + password);
            res.end();
          })
        }
      })
    } else {
      //must set window.location to headers.location on client side
      res.location("/login")
      res.end();
    }
  },
  join: async function (req, res) {
    console.log("working");
    const { bubbleID, invite } = req.params;
    const Bubble = await db.Bubble.findOne({ inviteCode: invite });
    if(Bubble.inviteActive) {
      const User = await db.User.updateOne({ sessionID: req.cookies.sessionID }, { $push: { _bubbleId: bubbleID } });
      const Update = await db.Bubble.updateOne({ inviteCode: invite }, { $push: { _userId: User._id }});
      res.redirect("/dashboard");
      res.end();
    }
  }
};
