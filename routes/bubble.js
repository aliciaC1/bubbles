const router = require("express").Router();
const bubbleController = require("../controller/bubble");

router.get("/:user/dashboard/:bubbleid", bubbleController.find);
router.get("/:user/dashboard/:bubbleid", bubbleController.create);

module.exports = router;