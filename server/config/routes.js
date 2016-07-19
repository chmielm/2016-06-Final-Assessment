var userController = require('../users/userController.js');

function restrict(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/api/users/signin');
  }
};

module.exports = function (app, express) {
  
  app.get('/', restrict, 
    function(req, res) {
      res.render('index');
  });

  app.get('/api/users/signin',
    function (req, res) {

      var url = "https://accounts.google.com/o/oauth2/v2/auth";
      url += "?response_type=code";
      url += "&client_id=239019984768-db3qb1ahrapel2clufd50q8kppp4q21q.apps.googleusercontent.com";
      url += "&redirect_uri=http://m-ch-assessment.com:4568/api/users/oauth/callback";
      url += "&&scope=email%20profile";
      url += "&security_token%3D138r5719ru3e1%26url%3Dhttps://oa2cb.example.com/myHome";

      res.render('signin', { googleurl: url});
  });


  app.get('/api/users/signup', 
    function(req, res) {
      res.render('signup');
  });

  app.post('/api/users/signin', userController.Signin);
  app.post('/api/users/signup', userController.Signup);
  app.post('/api/users/signout', userController.Signout);
  app.get('/api/users/oauth/callback', userController.CheckAuth);
  
};

