'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Staff = new Module('staff');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Staff.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Staff.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Staff.menus.add({
    title: 'staff example page',
    link: 'staff example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Staff.aggregateAsset('css', 'staff.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Staff.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Staff.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Staff.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Staff;
});
