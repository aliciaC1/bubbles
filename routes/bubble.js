const router = require("express").Router();
const bubbleController = require("../controller/bubble");

router.get("/:userid/dashboard/:bubbleid", bubbleController.findOne);

router.route("/createBubble").post(bubbleController.create);

module.exports = router;
