const env = require('../environment');
const mongoose = require('mongoose');
console.log('DB connecting...');
mongoose.connect('mongodb://' + env.username + ':' + env.password + '@' + env.hostname + ':' + env.port + '/' + env.database, {useNewUrlParser: true});
console.log('DB connected!');
module.exports = mongoose;
