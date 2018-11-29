const router = require("express").Router();
const imageController = require("../controller/image");
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: "dg6xx6stw",
    api_key: "271154536576737",
    api_secret: "wJiUhGAbXY0yYVp5kuN9EICBPaI"
});
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "demo",
    allowedFormats: ["jpg", "png",'jpeg'],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });

router.post("/api/images/:bubbleid", parser.single('image'), imageController.postImage);

module.exports = router;