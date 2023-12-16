const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");

module.exports = (app) => {
    app.use(morgan('common'));
    app.use(helmet());
    app.use(express.json());

    const initRoutes = require('../loaders/routes.loader');
    initRoutes(app);

    const errorHandlerMiddleware = require('../middlewares/error.handler.middleware');
    app.use(errorHandlerMiddleware);
}