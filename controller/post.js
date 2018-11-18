

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
  // Create a new note
  create: function (req, res) {

    /*

      1. Need a variable that allows me to grab the bubble id. 
    */

    db.User.findOne({ sessionID: req.cookies.sessionID })
      .then(function (SpeficiUser) {

      })
  }
  // Delete a note with a given id
  /*
 
  */
};
