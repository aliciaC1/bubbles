
const app = require('express').Router();
const db = require("./../models");

///////////////////////////Bubble and Post Routes//////////////////////////////
// Route for grabbing a specific Article by id, populate it with it's note
app.get("/bubble/:id", function (req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Bubble.findOne({ _id: req.params.id })
        // ..and populate all of the notes associated with it
        .populate("post")
        .then(function (dbBubble) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            console.log("---------------------------");
            console.log(dbBubble);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

// Route for saving/updating an Article's associated Note
app.post("/bubble/:id", function (req, res) {
    // Create a new note and pass the req.body to the entry
    db.Post.create(req.body)
        .then(function (dbPost) {
            // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
            // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.Bubble.findOneAndUpdate({ _id: req.params.id }, { $push: { note: dbPost._id } }, { new: true });
        })
        .then(function (dbArticle) {
            // If we were able to successfully update an Article, send it back to the client
            res.json(dbArticle);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

module.exports = app;