'use strict';

// The Package is past automatically as first parameter
module.exports = function(Testpackage, app, auth, database) {

  app.get('/testpackage/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/testpackage/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/testpackage/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/testpackage/example/render', function(req, res, next) {
    Testpackage.render('index', {
      package: 'testpackage'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
