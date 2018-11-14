const router = require('express').Router();
const posts = require('./post');

// route for /api/posts
router.use('/posts', posts)

module.exports = router;
