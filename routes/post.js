const router = require("express").Router();
const postController = require("../controller/post");

router.get("/api/post/:postid", postController.findOne);
router.post("/api/createpost", postController.create);

module.exports = router;