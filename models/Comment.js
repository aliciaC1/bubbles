// Headline model
// ==============

// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
const commentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    // post, a string, must be entered
    // summary, a string, must be entered
    messageBody: {
        type: String,
        required: true
    },
    _userId:
    {
        type: String
        // The ObjectIds will refer to the ids in the Note model
        //ref: "User"
    }
});

// Custom method `lastUpdatedDate`
commentSchema.methods.setUserId = function (name) {
    this._userId = name
    return this._userId
};

// Has to be CommentX because uppercase Comment is a specialized command in JavaScript.

// Create the post model using the postSchema
const CommentX = mongoose.model("Comment", commentSchema);

// Export the Headline model
module.exports = CommentX;
