const path = require("path");
const router = require("express").Router();
const bubble = require('./bubble');
const post = require('./post');
const dashboard = require('./dashboard');
const create = require('./create');

// Bubble and Post Routes
router.use("/bubbles/:id", bubble);
router.use("/bubbles", post);
router.use("/dashboard", dashboard);
router.use("/create", create);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/public/index.html"))
);

module.exports = router;
