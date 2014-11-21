'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Quote = new Module('quote');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Quote.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Quote.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Quote.menus.add({
    title: 'quote example page',
    link: 'quote example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Quote.aggregateAsset('css', 'quote.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Quote.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Quote.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Quote.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Quote;
});
