

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
  // Create a new note
  create: function (req, res) {

    db.User.findOne({ sessionID: req.cookies.sessionID })
      .then(function (SpecificUser) {
        const userName = SpecificUser.username;
        const post = new Post(req.body);
        post.setUserId(userName);
        db.Post.create(post)
          .then(function (dbPost) {
            return db.Bubble.findOneAndUpdate({ _id: req.params.bubbleid }, { $push: { post: dbPost._id } }, { new: true });
          }).then(function (dbPost) {
            // If we were able to successfully update an Bubble, send it back to the client
            /*
            1. From here find the user in the collection and put his name into the post.
            2. Probably along the lienes of "db.User.findOne({req.params.user})= to find his username to display"
            */
            res.json(dbPost);
          })
          .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
          });
      })
  }
  // Delete a note with a given id
  /*

  */
};
