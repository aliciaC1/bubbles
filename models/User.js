const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
    // `username` must be of type String
    // `username` will trim leading and trailing whitespace before it's saved
    // `username` is a required field and throws a custom error message if not supplied
    // 'images"
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, "can't be blank"],
        index: true
    },
    image: {
        type: String,
    },
    // `password` must be of type String
    // `password` will trim leading and trailing whitespace before it's saved
    // `password` is a required field and throws a custom error message if not supplied
    // `password` uses a custom validation function to only accept values 6 characters or more
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
      },
    // `email` must be of type String
    // `email` must be unique
    // `email` must match the regex pattern below and throws a custom error message if it does not
    // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
    email: {
        type: String,
        lowercase: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: [true, "can't be blank"],
        index: true
    },
    // `date` must be of type Date. The default value is the current date
    userCreated: {
        type: Date,
        default: Date.now
    },
    // Creation of Bubbles
    _bubbleId: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Note model
            ref: "Bubble"
        }
    ]
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;