// Headline model
// ==============

// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
const bubblesSchema = new Schema({
  // headline, a string, must be entered
  _postId: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Post"
    }
  ]
});

// Create the Headline model using the headlineSchema
const Bubble = mongoose.model("Bubble", bubblesSchema);

// Export the Headline model
module.exports = Bubble;