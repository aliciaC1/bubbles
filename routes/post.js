const router = require("express").Router();
const postController = require("../controller/post");

router.get("/api/post/:postid", postController.findOne);
router.post("/api/bubble/post/:bubbleid", postController.create);

module.exports = router;