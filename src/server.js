var http = require('http');
var router = require('./router.js');

var port = process.env.port || 4000;

var app = function(req, res) {
  router(req, res);
};

// start the server
var server = http.createServer(app).listen(port, function() {
  console.log('Server is listening on port', port);
});
