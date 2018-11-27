

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
  /*
   1. Find All Bubbles of User
  */
  findOne: function (req, res) {
   db.User.findOne({ sessionID: req.cookies.sessionID })
      .populate("_bubbleId")
      .then(function (dbBubble) {
        // If we were able to successfully find Bubbles, send them back to the client
        res.json(dbBubble);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  postPhoto: function(req, res) {
    db.User.updateOne({ sessionID: req.cookies.sessionID}, { image: req.body.image })
    .then(function(response) {
      console.log("Finished Updating Photo");
    })
  }
};
