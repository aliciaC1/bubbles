

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
    }
};
