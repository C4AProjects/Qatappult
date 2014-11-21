'use strict';

// The Package is past automatically as first parameter
module.exports = function(Certification, app, auth, database) {

  app.get('/certification/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/certification/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/certification/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/certification/example/render', function(req, res, next) {
    Certification.render('index', {
      package: 'certification'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
