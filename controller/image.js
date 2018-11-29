

// Controller for our notes
// ========================
const db = require("../models");

module.exports = {
  postImage: function (req, res) {
    console.log(req.file) // to see what is returned to you
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;
    db.Image.create(image) // save image information in database
      .then(newImage => {
        return db.Bubble.findOneAndUpdate({ _id: req.params.bubbleid}, { $push: { _imageId: newImage._id} }, { new: true })
      }).then(newBubble => res.json(newBubble))
      .catch(err => console.log(err));
  }
};
