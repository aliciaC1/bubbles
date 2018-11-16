// Headline model
// ==============

// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
const postSchema = new Schema({
    title: {
        type: String,
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
    _bubbleId: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Bubble"
        }
      ]
    ,
    _userId: [
        {
            // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "User"
        }
    ]
});

// Create the post model using the postSchema
const Post = mongoose.model("Post", postSchema);

// Export the Headline model
module.exports = Post;