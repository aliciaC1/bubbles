const router = require("express").Router();
const bubbleController = require("../controller/bubble");

router.get("/dashboard/:bubbleid", bubbleController.findOne);

router.route("/createBubble").post(bubbleController.create);

module.exports = router;
