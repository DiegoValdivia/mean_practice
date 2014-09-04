'use strict';

// The Package is past automatically as first parameter
module.exports = function(Meanpractice, app, auth, database) {

  app.get('/meanpractice/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/meanpractice/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/meanpractice/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/meanpractice/example/render', function(req, res, next) {
    Meanpractice.render('index', {
      package: 'meanpractice'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
