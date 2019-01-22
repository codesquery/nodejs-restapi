const apiRoute = require('./apis');

const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });
    
    server.use('/api', apiRoute);
}
module.exports = {
    init: init
};