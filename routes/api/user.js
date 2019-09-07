var express = require('express');
var router = express.Router();
const Response = require('../../controllers/response');
const UserController = require('../../controllers/user');

router.post('/auth', (req, res, next) => {
    const token = req.body.token;
    UserController.auth(token).then(value => {
        value ? Response.success(res, value) : Response.error(res);
    });
});
module.exports = router;
