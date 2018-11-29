const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    userLikes: [
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
    ]
});

module.exports = mongoose.model('Image', imageSchema);