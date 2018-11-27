const router = require("express").Router();
const dashboardController = require("../controller/dashboard");

router.get("/api/dashboard", dashboardController.findOne);

router.route("/api/dashboard").post(dashboardController.postPhoto);

module.exports = router;
