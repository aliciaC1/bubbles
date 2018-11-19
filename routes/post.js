const router = require("express").Router();
const postController = require("../controller/post");

router.get("/api/post/:postid", postController.findOne);
router.post("/api/:bubbleid/post", postController.create);

module.exports = router;