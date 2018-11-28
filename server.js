const express = require("express");
const app = express();
const logger = require('morgan');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 8000;
const path = require ('path');


// Use morgan logger for logging requests
app.use(logger("dev"));
// Configure body parsing for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB Config 
const db = require ('./config/keys').mongoURI;

/* ////////////////////////////////////////////////Production///////////////////////////////////////
*/

// Server static assets if in production 
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(
  db || process.env.MONGODB_URL || "mongodb://localhost/bubbles",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> Bubbles Server is now listening on PORT ${PORT}!`)
);
