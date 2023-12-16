const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');

const AccountModel = require("../models/account.model");
const { httpStatus } = require("../constants/http.constant");
const ApiException = require("../exceptions/api.exception");
const secret = process.env.JWT_SECRET;

module.exports = {
    signIn: async (props) => {
        const { body, query, params, context } = props;

        const account = await AccountModel.findOne({ email: body.email });
        if (!account) throw new ApiException(httpStatus.BAD_REQUEST, 'invalid email or password');

        const compareResult = await bcrypt.compare(body.password, account.password);
        if (!compareResult) throw new ApiException(httpStatus.UNAUTHORISED, 'invalid email or password');

        const token = await jwt.sign({ uuid: account.uuid }, secret);
        return {
            status: httpStatus.OK,
            token
        };
    },

    signUp: async (props) => {
        const { body, query, params, context } = props;

        const hashed = await bcrypt.hash(body.password, 10);
        const account = new AccountModel();
        account.email = body.email;
        account.password = hashed;
        account.uuid = uuidv4();
        account.save();

        return {
            status: httpStatus.OK,
        };
    },
}