const db = require("../models");

//Finds all bubbles associated with user.

module.exports = {
  // Find one note
  findOne: function (req, res) {
      db.Bubble.findOne({ _id: req.params.bubbleid })
          .populate("users")
          .populate("posts")
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
          .then(function(Bubble) { console.log(`Updated Bubble: ${Bubble}`) });
      })
      .catch(function(err) { res.json(err) })
    })
    .catch(function (err) {
      res.json(err);
    });
  }
};
