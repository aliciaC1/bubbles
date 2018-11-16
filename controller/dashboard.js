

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
  // Find one note
  find: function (req, res) {
    db.User.find({ _id: req.params.id })
      .populate("bubbles")
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
  /*
    1. Create a bubble (Insert Bubble Into User Array)
  */
  // Create a new bubble
  create: function (req, res) {
    db.Bubble.create(req.body)
      .then(function (dbPost) {
        // If we were able to successfully update an Bubble, send it back to the client
        console.log("Bubble Created");
        res.json(dbPost);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  }
  // Delete a note with a given id
  /*
  delete: function (req, res) {
    db.Note.remove({ _id: req.params.id }).then(function (dbNote) {
      res.json(dbNote);
    });
  }
  */
};
