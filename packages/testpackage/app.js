'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Testpackage = new Module('testpackage');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Testpackage.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Testpackage.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Testpackage.menus.add({
    title: 'testpackage example page',
    link: 'testpackage example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Testpackage.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Testpackage.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Testpackage.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Testpackage;
});
