exports.CreateSession = function(req, res, user){
  req.session.regenerate(function() {
    req.session.username = user;
    res.redirect('/');
  });
};

exports.DestroySession = function(req, res){
  req.session.destroy(function() {
    res.redirect('/');
  });
};