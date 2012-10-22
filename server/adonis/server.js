/* Adonis Website */

var common  = require('../common.js'),
    config  = common.config,
    express = common.express;

// Create REST-ful servers
var app = express.createServer();

// Routes
app.get('/*', function(req, res) {
  res.send('<h1>Adonis Website</h1>');
});

// Start the servers
app.listen(config.servers.adonis.port, config.servers.adonis.host);

console.log('> Adonis website running at ' + config.servers.adonis.host + ':' + config.servers.adonis.port);