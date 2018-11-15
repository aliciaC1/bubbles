/*
1. Creating a New Bubble.

*/
const app = require('express').Router();
const db = require("./../models");

app.get("/dashboard", function (req, res) {
    // Grab every document in the Articles collection
    db.Bubble.find({})
      .then(function (dbBubble) {
        // If we were able to successfully find Articles, send them back to the client
        console.log(dbBubble);
        res.json(dbBubble);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
});

module.exports = app;