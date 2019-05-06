const server = require('./config/custom-config')();

server.listen(4100, (req, res) => {
    console.log('servidor correndo na porta 4100');
})