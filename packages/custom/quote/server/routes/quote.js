'use strict';

// The Package is past automatically as first parameter
module.exports = function(Quote, app, auth, database) {

  app.get('/quote/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/quote/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/quote/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/quote/example/render', function(req, res, next) {
    Quote.render('index', {
      package: 'quote'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
