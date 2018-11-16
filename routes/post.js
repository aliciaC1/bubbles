const router = require("express").Router();
const postController = require("../controller/post");

router.post("/:user/dashboard/:bubbleid/:postid", postController.create);

module.exports = router;