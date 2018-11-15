
const app = require('express').Router();
const db = require("./../models");

///////////////////////////Bubble and Post Routes//////////////////////////////
// Route for grabbing a specific Bubble by id, populate it with it's post
app.get("/bubbles/:id", function (req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Bubble.findOne({ _id: req.params.id })
        // ..and populate all of the posts associated with it
        .populate("post")
        .then(function (dbBubble) {
            // If we were able to successfully find an Bubble with the given id, send it back to the client
            console.log("---------------------------");
            console.log(dbBubble);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

// Route for saving/updating an Bubble's associated post
app.post("/bubbles/:id", function (req, res) {
    // Create a new post and pass the req.body to the entry
    db.Post.create(req.body)
        .then(function (dbPost) {
            // If a post was created successfully, find one Bubble with an `_id` equal to `req.params.id`. Update the Bubble to be associated with the new post
            // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.Bubble.findOneAndUpdate({ _id: req.params.id }, { $push: { post: dbPost._id } }, { new: true });
        })
        .then(function (dbPost) {
            // If we were able to successfully update an Bubble, send it back to the client
            res.json(dbPost);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

module.exports = app;