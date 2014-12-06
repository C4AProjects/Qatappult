'use strict';

// The Package is past automatically as first parameter
module.exports = function(Service, app, auth, database) {
  ///API ENDPOINTS
  var services = require('../controllers/services'),
  users = require('../../../../users/server/controllers/users');
  
  app.route('/users/:userId/services')
    .get(services.all)
    .post(auth.requiresLogin, services.create);
  app.route('/users/:userId/services/:serviceId')
    .get(services.show)
    .put(auth.requiresLogin, services.update)
    .delete(auth.requiresLogin, services.destroy);  
  // Finish with setting up the serviceId param
  app.param('serviceId', services.service);
   // Setting up the userId param
  app.param('userId', users.user);
};
