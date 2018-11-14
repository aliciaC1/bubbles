const express = require('express');
const bodyParser = require('body-parser');
const application = express();

const PORT = process.env.PORT || 8080;
const db = require('./models');

application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  application.use(express.static("client/build"));
}

application.use(require('./routes'));

db.sequelize.sync({ force: true })
  .then(function() {
    application.listen(PORT, function() {
      console.log("App is listening on port", PORT);
    })
  });
