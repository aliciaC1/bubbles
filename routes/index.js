const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const login = require('./login.js');
const bubble = require('./bubble');

// API Routes
router.use("/api", apiRoutes);

router.use("/secret", login);

router.use("/", bubble);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
