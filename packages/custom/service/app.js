'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Service = new Module('service');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Service.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Service.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Service.menus.add({
    title: 'service example page',
    link: 'service example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Service.aggregateAsset('css', 'service.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Service.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Service.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Service.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Service;
});
