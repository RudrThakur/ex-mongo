class ApiException extends Error {
    constructor(code, message) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.message = message;
    }
};

module.exports = ApiException;