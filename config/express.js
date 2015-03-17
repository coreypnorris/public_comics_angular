var express = require('express');
var logger = require('morgan');
module.exports = function() {
  var app = express();
  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  require('../app/routes/index.server.routes.js')(app);
  app.use(express.static('./public'));

  app.use(logger('default'));

  // Handle 404
  app.use(function(req, res, next) {
      res.status(404).sendfile('./error/404.html');
  });

  return app;
};
