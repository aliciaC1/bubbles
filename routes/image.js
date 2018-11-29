const router = require("express").Router();
const imageController = require("../controller/image");

router.post("/api/image/:bubbleid", imageController.postImage);

module.exports = router;