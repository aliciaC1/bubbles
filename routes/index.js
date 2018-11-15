const path = require("path");
const router = require("express").Router();
const bubble = require('./bubble');

// Bubble and Post Routes
router.use("/bubbles/:id", bubble);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/public/index.html"))
);

module.exports = router;
