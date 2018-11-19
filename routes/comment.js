const router = require("express").Router();
const commentController = require("../controller/comment");

router.post("/api/comment/:postid", commentController.create);

module.exports = router;