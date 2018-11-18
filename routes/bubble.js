const router = require("express").Router();
const bubbleController = require("../controller/bubble");

router.get("/:bubbleid", bubbleController.findOne);

router.route("/createBubble").post(bubbleController.create);

module.exports = router;
