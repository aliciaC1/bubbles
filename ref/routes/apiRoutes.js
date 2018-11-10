var db = require("../db/models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    console.log("API Examples This Works")
    db.UserReview.findAll({
      include: [db.User, db.Product, db.Location]
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/maps", function(req, res) {
    db.Location.findAll({
      //include: [db.User, db.Product, db.Location]
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new examples
  app.post("/api/examples", function(req, res) {
    /*
db.Location.create({
     name: "Name",
     lat: 24.0,
     lng: 432
   }).then(function(insertedId){

   });
    */
    db.UserReview.create({
      UserId: req.session.user.id,
      price: req.body.price,
      description: req.body.description,
      ProductId: req.body.product,
      LocationId: req.body.location
    }).then(function(UserReview) {
      res.json(UserReview);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.UserReview.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
