const Joi = require("joi");

module.exports = {
    signIn: Joi.object()
        .options({
            stripUnknown: true,
        })
        .keys({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(15).required(),
        }),

    signUp: Joi.object()
        .options({
            stripUnknown: true,
        })
        .keys({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(15).required(),
        }),
}