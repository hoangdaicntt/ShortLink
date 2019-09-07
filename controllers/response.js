module.exports = class Response {
    static success(res, data) {
        res.send({
            data: data,
            success: true
        });
    }

    static error(res, errors = null) {
        res.send({
            errors: errors,
            success: false
        });
    }
};
