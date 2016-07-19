var request = require('request');
var utility = require('./../utility.js');

var OnOAuthfailed = function (res) {
  res.redirect('/api/users/signin');
}

module.exports = {
  Validate : function(req, res) {
    var _code = req.query.code;
    if(_code){
      var data = { client_id :  '239019984768-db3qb1ahrapel2clufd50q8kppp4q21q.apps.googleusercontent.com',
                   client_secret : 'aDMQ4iowXtvfteAkVbFSuYgV', 
                   grant_type : 'authorization_code',
                   code : _code,
                   redirect_uri : 'http://m-ch-assessment.com:4568/api/users/oauth/callback'};
      request.post({ headers: { 'Content-Type' : 'application/x-www-form-urlencoded'},
                     uri:     'https://www.googleapis.com/oauth2/v4/token',
                     data:    data,
                     dataType: "json",
                     crossDomain:true,
                     cache : true 
                    }, function(error, response, body){
                         if(error) {
                             OnOAuthfailed(res);
                         } else {
                           if(response.statusCode) { // it doesn't work ??? why ??? should be ---> == 200
                             var username = "Google user " + _code;
                             utility.CreateSession(req, res, username);
                           } else {
                             OnOAuthfailed(res);
                           }
                         }
                       });
    }
    else {
      OnOAuthfailed(res);
    }    
  }
};