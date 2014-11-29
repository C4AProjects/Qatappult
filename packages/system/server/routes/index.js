'use strict';

module.exports = function(System, app, auth, database) {

  // Home route
  var index = require('../controllers/index');
  app.route('/')
    .get(index.render);
    
  app.all('/v1/*', auth.requiresLogin); //All API requests require  user authentication
};
