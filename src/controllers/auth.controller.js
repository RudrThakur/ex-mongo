const asyncHandler = require('express-async-handler');
const { httpStatus } = require('../constants/http.constant');
const authService = require('../services/auth.service');

module.exports = {
    signIn: asyncHandler(async (req, res) => {
        let data = await authService.signIn({
            body: req.body,
            query: req.query,
            params: req.params,
            context: res.locals.context,
        });
        return res.status(httpStatus.OK).json(data);
    }),

    signUp: asyncHandler(async (req, res) => {
        let data = await authService.signUp({
            body: req.body,
            query: req.query,
            params: req.params,
            context: res.locals.context,
        });
        return res.status(httpStatus.OK).json(data);
    }),
}