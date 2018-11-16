const router = require("express").Router();
const dashboardController = require("../controller/dashboard");

router.get("/:user/dashboard", dashboardController.find);
router.post("/:user/dashboard", dashboardController.create);

module.exports = router;