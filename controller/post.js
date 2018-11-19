

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
  // Create a new note
  findOne: function (req, res) {
    db.Post.findOne({ _id: req.params.postid })
      .populate("_commentId")
      .then(function (dbComment) {
        // If we were able to successfully find Articles, send them back to the client
        console.log(dbComment);
        res.json(dbComment);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  create: function (req, res) {
    db.User.findOne({ sessionID: req.cookies.sessionID })
      .then(function (SpecificUser) {
        const userName = SpecificUser.username;
        const post = new db.Post(req.body);
        post.setUserId(userName);
        db.Post.create(post)
          .then(function (dbPost) {
            return db.Bubble.findOneAndUpdate({ _id: req.params.bubbleid }, { $push: { _postId: dbPost._id } }, { new: true });
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
