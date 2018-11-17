

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
  /*
   1. Find All Bubbles of User
  */
  find: function (req, res) {
    db.User.find({ _id: req.params.user })
      .populate("bubbles")
      .then(function (dbBubble) {
        // If we were able to successfully find Bubbles, send them back to the client
        console.log(dbBubble);
        res.json(dbBubble);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  /*
    1. Create a bubble (req.body = "name of bubble").
    2. Person who creates bubble automatically joins.
  */
  create: function (req, res) {
    db.Bubble.create(req.body)
      .then(function (dbBubble) {
        // If we were able to successfully update an Bubble, send it back to the client
        db.User.findOneAndUpdate({ _id: req.params.user }, { $push: { _bubbleId: dbBubble._id } }, { new: true });
      })
      .then(function (dbBubble) {
        // If we were able to successfully update an Bubble, send it back to the client
        console.log(dbBubble)
        db.Bubble.findOneAndUpdate({ _id: dbBubble._id}, { $push: { _userId: req.params.user } }, { new: true });
      })
      .then(function (dbBubble) {
        // If we were able to successfully find Articles, send them back to the client
        console.log(dbBubble);
        res.json(dbBubble);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  }
  // Will add delete functionalitiy later.
  /*
  delete: function (req, res) {
    db.Note.remove({ _id: req.params.id }).then(function (dbNote) {
      res.json(dbNote);
    });
  }
  */
};
