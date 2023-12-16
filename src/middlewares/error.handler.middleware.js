const ApiException = require('../exceptions/api.exception');

module.exports = (error, req, res, next) => {
    if (error instanceof ApiException) {
        return res.status(error.code).json({
            message: error.message
        });
    } else {
        return res.status(500).json({
            message: 'something went wrong'
        });
    }
}