var restify = require('restify');
var consign = require('consign');
const helmet = require('helmet')
const { mid } = require('../middleware/auth')
var cors = require('cors')
var log = require('../logParameter/log')

// var alma = new Server();

module.exports = function() {
    var server = restify.createServer({
        name: 'web-api',
        version: 1.0
    });
    server.use(helmet());
    server.use(restify.plugins.gzipResponse());
    server.use(restify.plugins.bodyParser());
    server.use(cors({
        origins: ['*']
    }))

    consign()
        .include('controllers')
        .into(server, mid, log);

        return server;
}
