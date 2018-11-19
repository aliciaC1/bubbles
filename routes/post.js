const router = require("express").Router();
const postController = require("../controller/post");

router.get("/api/findpost/:id", postController.findOne);
router.post("/api/createpost/:id", postController.create);

module.exports = router;