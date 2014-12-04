'use strict';

// The Package is past automatically as first parameter
module.exports = function(Service, app, auth, database) {
  ///API ENDPOINTS
  var services = require('../controllers/services');
  
  app.route('/v1/services')
    .get(services.all)
    .post(auth.requiresLogin, services.create);
  app.route('/v1/services/:serviceId')
    .get(services.show)
    .put(auth.requiresLogin, services.update)
    .delete(auth.requiresLogin, services.del);  
  // Finish with setting up the serviceId param
  app.param('serviceId', services.service);
};
