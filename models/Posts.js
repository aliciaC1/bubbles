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
    name:{
        type: String
    }, 
    avatar: {
        type: String
    }, 
    _userId: {
        type: String
        // The ObjectIds will refer to the ids in the Note model
        //ref: "User"
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId, 
                ref: 'users'
            }

        }
    ], 
    _commentId: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Note model
            ref: "Comment"
        }
    ]

});

// Custom method `lastUpdatedDate`
postSchema.methods.setUserId = function (name) {
    this._userId = name
    return this._userId
};

// Create the post model using the postSchema
const Post = mongoose.model("Post", postSchema);

// Export the Headline model
module.exports = Post;
