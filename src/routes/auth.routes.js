const express = require('express');
const authRouter = express.Router();
const authDto = require('../dto/auth.dto');
const authController = require('../controllers/auth.controller');
const requestValidateMiddleware = require('../middlewares/request.validate.middleware');

authRouter.post(
    '/signin',
    [
        requestValidateMiddleware(authDto.signIn),
    ],
    authController.signIn
);

authRouter.post(
    '/signup',
    [
        requestValidateMiddleware(authDto.signUp),
    ],
    authController.signUp
);

module.exports = authRouter;