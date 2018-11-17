const router = require("express").Router();
const dashboardController = require("../controller/dashboard");

router.get("/api/dashboard", dashboardController.find);
router.post("/api/dashboard", dashboardController.create);

module.exports = router;
