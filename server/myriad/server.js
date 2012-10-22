/* Myriad Ad Server */

var common  = require('../common.js'),
    config  = common.config,
    express = common.express;

// Create REST-ful servers
var app = express.createServer();

// Routes
app.get(/^\/([\d\.]+).js/, function(req, res) {
  var id = req.params[0]
  res.send('<h1>Myriad Ad Server</h1><h3>' + id + '</h3>');
});

app.get('/', function(req, res) {
  res.send('<h1>Myriad Ad Server</h1>');
});

// Start the server
app.listen(config.servers.myriad.port, config.servers.myriad.host);

console.log('> Myriad ad server running at ' + config.servers.myriad.host + ':' + config.servers.myriad.port);