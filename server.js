// Dependencies

const EXPRESS = require("express");
const BODYPARSER = require("body-parser");

// Set up the Express App

const APP = express();
const PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing

APP.use(EXPRESS.static(__dirname + "/app/public"));
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.text());
APP.use(BODYPARSER.json({ type: "application/vnd.api+json" }));

// Require routing

require("./app/routing/apiRoutes")(APP);
require("./app/routing/htmlRoutes")(APP);

// Starts the server to begin listening

APP.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});