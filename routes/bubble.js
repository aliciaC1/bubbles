const router = require("express").Router();
const bubbleController = require("../controller/bubble");

router.get("/api/bubble/:id", bubbleController.findOne);

router.get("/api/findbubble", bubbleController.findAll);

router.route("/api/bubble").post(bubbleController.create);

router.route("/api/bubble/:bubbleID/invite").post(bubbleController.getInvite);

router.route("/api/bubble/:bubbleID/:invite").get(bubbleController.join);

module.exports = router;
