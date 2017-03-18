var fs = require('fs');
var path = require('path');

var headers = {
  'html'  : { 'content-type'  : 'text/html' },
  'css'   : { 'content-type'  : 'text/css' },
  'js'    : { 'content-type'  : 'text/javascript' }
}

var handlers = {};

handlers.public = function(req, res) {
  var fileType = req.url.split('.')[1];
  res.writeHead(200, headers[fileType]);

  var file  = '';
  if (req.url === '/') {
    file = 'index.html';
  } else {
    file = req.url.slice(1);
  }

  var filePath = path.join(__dirname, '..', 'public', file);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      console.log(error);
      return;
    }
    res.end(file);
  });
}

handlers.notFound = function(req, res) {
  res.writeHead(404, headers);
  res.end('Resource not found');
}

module.exports = handlers;
