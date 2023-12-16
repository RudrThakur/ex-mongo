const { httpStatus } = require("../constants/http.constant");

const requestValidateMiddleware = (dto) => {
    return (req, res, next) => {
        const { error } = dto.validate(req.body);
        const valid = error == null;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');
            res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ message: message });
        }
    }
}

module.exports = requestValidateMiddleware;