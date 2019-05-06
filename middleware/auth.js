module.exports = {
    mid(req, response, next) {
        console.log('entrou no middleware!')
        // let error = new Error();
        // let alma = 'oiii'
        // req.ola = alma;
        // error.message = 'algo aconteceu!'
        // error.statusCode = 401;
        // console.log('enviuou')
        // response.locals.user = 'user';
        response.locals = { access_token: 'ff0967a64e767', userAgent: req.userAgent() }
        return next();
    }
}