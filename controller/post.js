

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
  // Create a new note
  findOne: function (req, res) {
    db.Post.findOne({ _id: req.params.postid })
      .populate("_commentId")
      .populate("likes")
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
        const userName = SpecificUser.username
        const avatar = SpecificUser.image;
        const post = new db.Post(req.body);
        post.setUserId(userName);
        post.setAvatar(avatar);
        db.Post.create(post)
          .then(function (dbPost) {
            return db.Bubble.findOneAndUpdate({ _id: req.params.bubbleid }, { $push: { _postId: dbPost._id } }, { new: true })
              .populate("_postId");
          }).then(function (dbPost) {
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
