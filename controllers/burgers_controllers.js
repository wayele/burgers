const express = require("express");

// Import the model (cat.js) to use its database functions.
const burgers = require("../models/burger");

var router = express.Router();


// Export routes for server.js to use.
module.exports = router;