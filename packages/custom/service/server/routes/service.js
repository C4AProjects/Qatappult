'use strict';

// The Package is past automatically as first parameter
module.exports = function(Service, app, auth, database) {

  app.get('/service/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/service/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/service/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/service/example/render', function(req, res, next) {
    Service.render('index', {
      package: 'service'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
