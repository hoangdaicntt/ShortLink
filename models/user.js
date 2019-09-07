const mongoose = require('./index');
const Schema = mongoose.Schema;

module.exports = mongoose.model('HD-User', new Schema({
    googleId: String,
    avatar: String,
    name: String,
    email: String,
    email_verified: Boolean,
    type: String,
    money: Number,
    created: Date,
    updated: Date,
    loginAt: Date,
    status: String
}));
