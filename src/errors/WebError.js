export default class WebError extends Error {
    constructor(message, statusCode = 0) {
        super(message);

        Object.setPrototypeOf(this, Error.prototype);

        this.statusCode = statusCode;
    }
}