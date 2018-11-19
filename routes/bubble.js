const router = require("express").Router();
const bubbleController = require("../controller/bubble");

router.get("/api/bubble/:id", bubbleController.findOne);

router.route("/api/bubble/create").post(bubbleController.create);

module.exports = router;
