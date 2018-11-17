const router = require("express").Router();
const postController = require("../controller/post");

router.post("/:user/dashboard/:bubbleid/post", postController.create);

module.exports = router;