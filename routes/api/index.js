var express = require('express');
var router = express.Router();

const linkRouter = require('./link');
const userRouter = require('./user');

router.use('/link', linkRouter);
router.use('/user', userRouter);

module.exports = router;
