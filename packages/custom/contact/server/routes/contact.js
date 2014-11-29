'use strict';

// The Package is past automatically as first parameter
module.exports = function(Contact, app, auth, database) {

  
  ///API ENDPOINTS
  var contacts = require('../controllers/contacts');
  
  app.route('/v1/contacts')
    .get(contacts.all)
    .post(auth.requiresLogin, contacts.create);
  app.route('/v1/contacts/:contactId')
    .get(contacts.show)
    .put(auth.requiresLogin, hasAuthorization, contacts.update)
    .delete(auth.requiresLogin, hasAuthorization, contacts.del);  
  // Finish with setting up the contactId param
  app.param('contactId', contacts.contact);
};
