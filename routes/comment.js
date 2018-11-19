const router = require("express").Router();
const commentController = require("../controller/comment");

router.post("/api/comment/:id", commentController.create);

module.exports = router;