var express = require('express');

var app = express();

// configure server
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express); 

module.exports = app;
