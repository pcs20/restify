module.exports = function(server, mid, log) {

    server.get('/alma0', mid, async (req, res, next) => {
        // res.locals.user;
        // res.locals.user = { token: undefined }
        console.log(req.userAgent(), req.path(), log.prototype.getNome())
        res.send({ nome: 'alex', nome: log.prototype.getNome() });
    });

    server.get('/alma1', mid, async (req, res, next) => {
        // res.locals.user;
        // res.locals.user = { token: undefined }
        log.prototype.setNome('alexsander')
        console.log(req.userAgent(), req.path(), log.prototype.getNome())
        res.send({ nome: 'alex', nome: log.prototype.getNome() });
    });

    server.post('/alma2', mid, async (req, res, next) => {
        // res.locals.user;
        // res.locals.user = { token: undefined }
        console.log(res.locals)
        res.send({ nome: 'alex', mid: mid });
    });

    server.get('/teste.xlsx', mid, async (req, res, next) => {
        // res.locals.user;
        // res.locals.user = { token: undefined }
        res.contentType = 'application/octet-stream'
        console.log(req.userAgent(), req.path())
        res.send('alma doida');
    });
}