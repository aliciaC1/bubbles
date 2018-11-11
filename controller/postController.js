const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Post.findAll()
      .then(results => res.json(results))
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.Post.create(req.body)
    .then(results => res.json(results))
    .catch(err => console.log(err));
  }
};
