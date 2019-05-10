const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect("mongodb://jenn2:MongoDB123@ds155086.mlab.com:55086/heroku_mdsw56fj");
//mongoose.connect("mongodb://localhost/articles");
// "mongodb://localhost/articles");
//"mongodb://jenn:MongoDB123@ds155086.mlab.com:55086/heroku_mdsw56fj"

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
