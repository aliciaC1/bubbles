const router = require('express').Router();
const post = require('../../controller/postController.js');

// Matches with "/api/books"
router.route("/:id")
  .get(post.findAll)
  .post(post.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(postController.findById)
//   .put(postController.update)
//   .delete(postController.remove);

module.exports = router;
