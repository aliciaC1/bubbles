var db = require("../db/models");

module.exports = function(app) {

  function restrict(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      req.session.error = "Access denied!";
      res.redirect("/login");
    }
  }

  // Load index page
  app.get("/index", function(req, res) {
    db.UserReview.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

//  search

  /*
  app.get("restricted/search", restrict, function (req, res){
    res.render("search");
  });
  */

  app.get("/restricted/search", restrict, function(req, res) {
    // res.send("Wahoo! restricted area, click to <a href='/logout'>logout</a>");
    res.render("search", {
      user: req.session.user
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:location/:product", restrict, function (req, res) {

    var locationID = req.params.location;
    var productID = req.params.product;
    var emptySQLNumber = 0;
    var dataArray = [];

    console.log("This Route HTML IS WORKING");
    
    function median(values) {
      values.sort(function (a, b) {
        return a - b;
      });

      if (values.length === 0) return 0

      var half = Math.floor(values.length / 2);

      if (values.length % 2)
        return values[half];
      else
        return (values[half - 1] + values[half]) / 2.0;
    }

    db.UserReview.findAll({
      where: { 
        LocationID: locationID,
        ProductID: productID
       }
    }).then(function (dbExamples) {
      for (var i = 0; i < dbExamples.length; i++) {
        emptySQLNumber += parseInt(dbExamples[i].price);
        dataArray.push(parseInt(dbExamples[i].price));
        console.log(emptySQLNumber);
      }
      //Data Array
      console.log(dataArray+" Data Array");
      //Median Functionality
      var medianDisplay=median(dataArray);
      //Average Functionality
      var avg = emptySQLNumber / dbExamples.length;
      //Max Functionality
      var max = Math.max(...dataArray);
      //Min Functionality
      var min = Math.min(...dataArray);
      res.render('example', {
        example: dbExamples,
        avg: parseFloat(avg).toFixed(2),
        median: medianDisplay,
        max: max,
        min: min,
        location: locationID,
        product: productID,
        user: req.session.user
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
