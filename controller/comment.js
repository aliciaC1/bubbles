

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {

  // Create a new note
  create: function (req, res) {
    db.User.findOne({ sessionID: req.cookies.sessionID })
      .then(function (SpecificUser) {
        const userName = SpecificUser.username;
        const comment = new db.CommentX(req.body);
        comment.setUserId(userName);
        db.CommentX.create(comment)
          .then(function (dbComment) {
            return db.Post.findOneAndUpdate({ _id: req.params.postid  }, { $push: { _commentId: dbComment._id } }, { new: true })
            .populate("_commentId");
          }).then(function (dbComment) {
            // If we were able to successfully update an Bubble, send it back to the client
            /*
            1. From here find the user in the collection and put his name into the post.
            2. Probably along the lienes of "db.User.findOne({req.params.user})= to find his username to display"
            */
            res.json(dbComment);
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
