// Headline model
// ==============

// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
const bubblesSchema = new Schema({
  // headline, a string, must be entered
  name: {
    type: String,
    required: true
  },
  bubbleCategories: {
    type: Number
  },
  _userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  _postId: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Post model
      ref: "Post"
    }
  ],
  _imageId: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Image model
      ref: "Image"
    }
  ],
  inviteCode: {
    type: String
  },
  inviteActive: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model using the headlineSchema
const Bubble = mongoose.model("Bubble", bubblesSchema);

// Export the Headline model
module.exports = Bubble;
