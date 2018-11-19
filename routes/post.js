const router = require("express").Router();
const postController = require("../controller/post");

router.post("/post", postController.create);

module.exports = router;