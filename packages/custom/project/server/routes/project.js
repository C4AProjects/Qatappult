'use strict';

// The Package is past automatically as first parameter
module.exports = function(Project, app, auth, database) {


  ///API ENDPOINTS
  var projects = require('../controllers/projects');
  
  app.route('/v1/projects')
    .get(projects.all)
    .post(auth.requiresLogin, projects.create);
  app.route('/v1/projects/:projectId')
    .get(projects.show)
    .put(auth.requiresLogin, hasAuthorization, projects.update)
    .delete(auth.requiresLogin, hasAuthorization, projects.del);  
  // Finish with setting up the projectId param
  app.param('projectId', projects.project);
};
