

// // Controller for our notes
// // ========================
// const db = require("../models");

// // Initialize Firebase
// let config = {
//   apiKey: "AIzaSyDNyM_cu96UQ7n-NLJLpHCZuVsZwyuopUU",
//   authDomain: "bubbles-9481c.firebaseapp.com",
//   databaseURL: "https://bubbles-9481c.firebaseio.com",
//   projectId: "bubbles-9481c",
//   storageBucket: "bubbles-9481c.appspot.com",
//   messagingSenderId: "470591964890"
// };
// firebase.initializeApp(config);

// // Get a reference to the storage service, which is used to create references in your storage bucket
// let storage = firebase.storage();

// // Create a storage reference from our storage service
// let storageRef = storage.ref();

module.exports = {
  postImage: function (req, res) {
    db.Image.create(req.body.image)
      .then(function (dbImage) {
        return db.Bubble.findOneAndUpdate({ _id: req.params.bubbleid }, { $push: { _postId: dbImage._id } }, { new: true })
          .populate("_imageId");
      }).then(function (dbImage) {
        console.log(dbImage);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  }

};
// Delete a note with a given id
  /*
  const imageModel = new db.Image();
  const img = req.body.image.img;

const data = img['$ngfDataUrl'];
const split = data.split(','); // or whatever is appropriate here. this will work for the example given
const base64string = split[1];
const buffer = new Buffer(base64string, "base64");

imageModel.img.data = buffer;
// Check for the File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
} else {
  alert('The File APIs are not fully supported in this browser.');
}

function handleFileSelect(evt) {
  var f = evt.target.files[0]; // FileList object
  var reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      var binaryData = e.target.result;
      //Converting Binary Data to base 64
      var base64String = window.btoa(binaryData);
      //showing file converted to base64
      document.getElementById('base64').value = base64String;
      alert('File converted to base64 successfuly!\nCheck in Textarea');
    };
  })(f);
  // Read in the image file as a data URL.
  reader.readAsBinaryString(f);
}

function readFile() {
  
  if (this.files && this.files[0]) {
    
    var FR= new FileReader();
    
    FR.addEventListener("load", function(e) {
      document.getElementById("img").src       = e.target.result;
      document.getElementById("b64").innerHTML = e.target.result;
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
  
}

document.getElementById("inp").addEventListener("change", readFile);

  */