const mongoose = require('./index');
const Schema = mongoose.Schema;

module.exports = mongoose.model('HD-Link', new Schema({
    urlLong: String,
    uid: String,
    googleId: String,
    type: String,
    created: Date,
    updated: Date,
    status: String
}));
