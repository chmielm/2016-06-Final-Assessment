var bodyParser = require('body-parser');
var partials = require('express-partials');
var session = require('express-session'); 
var _session;

module.exports = function (app, express) {
  app.use(express.static(__dirname + './../../client'));

  app.set('views', __dirname + '/../views');
  app.set('view engine', 'ejs');
  
  app.use(partials());

  // parse application/x-www-form-urlencoded 
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json 
  app.use(bodyParser.json())

  app.use(session({ secret: 'Marek Chmiel and HackReactor',
                    resave: true,
                    saveUninitialized: true,
                    cookie: { maxAge: 6000000 }	
                   })); 
};