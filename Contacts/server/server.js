
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./lib/routes');
var user = require('./lib/routes/user');
var http = require('http');
var path = require('path');
var config = require('./config.js');

var app = express();
var server = http.createServer(app);

require('./lib/routes/static').addRoutes(app, config);

// all environments
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./lib/routes/appFile').addRoutes(app, config);

server.listen(config.server.listenPort, '0.0.0.0', 511, function() {
    // // Once the server is listening we automatically open up a browser
    var open = require('open');
    open('http://localhost:' + config.server.listenPort + '/');
});
console.log('Angular App Server - listening on port: ' + config.server.listenPort);
