var express = require('express');
var router = express.Router();
const LinkController = require('../../controllers/link');
const Response = require('../../controllers/response');
const UserController = require('../../controllers/user');
/* GET users listing. */
router.post('/short-url', function (req, res, next) {
    const urlLong = req.body.url;
    const googleId = req.body.userId;
    const type = req.body.type;
    LinkController.createShortLink(urlLong, googleId, type).then((value) => {
        Response.success(res, value);
    });
});
router.get('/get-url/:uid', function (req, res, next) {
    const uid = req.params.uid;
    LinkController.getLongLink(uid).then((value) => {
        Response.success(res, value);
    });
});

router.get('/test/:token', (req, res, next) => {
    const token = req.params.token;
    UserController.auth(token).then(value => {
        Response.success(res, value);
    });
});
module.exports = router;
