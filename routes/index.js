

/*
const router = require("express").Router();
const apiRoutes = require("./api");
const viewRoutes = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;

*/

const router = require("express").Router();
const dashboardRoute = require("./dashboard");
const bubbleRoute = require("./bubble");

router.use("/", dashboardRoute);
router.use("/", bubbleRoute);

module.exports = route;