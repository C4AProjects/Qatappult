'use strict';

// The Package is past automatically as first parameter
module.exports = function(Company, app, auth, database) {
  
  ///API ENDPOINTS
  var companies = require('../controllers/companies');
  
  app.route('/v1/companies')
    .get(companies.all)
    .post(auth.requiresLogin, companies.create);
  app.route('/v1/companies/:companyId')
    .get(companies.show)
    .put(auth.requiresLogin, companies.update)
    .delete(auth.requiresLogin, companies.del);
  app.route('/v1/companies/search/:name')
    .get(companies.searchByName)
  app.route('/v1/companies/:companyId/contacts')
    .get(companies.contactsByCompany)
  // Finish with setting up the companyId param
  app.param('companyId', companies.company);
};
