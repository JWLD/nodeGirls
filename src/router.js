var handlers = require('./handlers.js');

var routes = {
  '/'         : handlers.public,
  '/main.css' : handlers.public,
  '/index.js' : handlers.public,
  '404'       : handlers.notFound
}

module.exports = function(req, res) {
  /*console.log(req.url);*/
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    routes[404](req, res);
  }
}
