'use strict';

// The Package is past automatically as first parameter
module.exports = function(Company, app, auth, database) {

  app.get('/company/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/company/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/company/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/company/example/render', function(req, res, next) {
    Company.render('index', {
      package: 'company'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
  
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
