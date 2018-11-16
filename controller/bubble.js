

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
    // Find one note
    findOne: function (req, res) {
        db.Bubble.findOne({ _id: req.params.id })
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
        db.Post.create(req.body)
          .then(function (dbPost) {
            // If a post was created successfully, find one Bubble with an `_id` equal to `req.params.id`. Update the Bubble to be associated with the new post
            // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.Bubble.findOneAndUpdate({ _id: req.params.id }, { $push: { post: dbPost._id } }, { new: true });
          })
          .then(function (dbPost) {
            return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { post: dbPost._id } }, { new: true });
          })
          .then(function (dbPost) {
            // If we were able to successfully update an Bubble, send it back to the client
            res.json(dbPost);
          })
          .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
          });
      }
};
