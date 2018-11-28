const router = require("express").Router();
const dashboardController = require("../controller/dashboard");

router.get("/api/dashboard", dashboardController.findOne);

module.exports = router;
