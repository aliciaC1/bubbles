

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
  /*
   1. Find All Bubbles of User
  */
  findOne: function (req, res) {
    db.User.findOne({ sessionID: req.cookies.sessionID })
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
  }
};
