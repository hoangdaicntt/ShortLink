const environment = require('../environment');
const axios = require('axios');
const UserModel = require('../models/user');
const UserConstant = require('../constants/user');

module.exports = class UserController {
    static async auth(token) {
        const googleUser = await axios.get(environment.googleAuthUrl + token).then(res => res.data).catch(err => null);
        if (!googleUser) {
            return null;
        }
        let user = await UserModel.findOne({googleId: googleUser.sub});
        if (!user) {
            user = new UserModel({
                googleId: googleUser.sub,
                avatar: googleUser.picture,
                name: googleUser.name,
                email: googleUser.email,
                email_verified: googleUser.email_verified,
                type: UserConstant.types.normal,
                money: 0,
                created: new Date().getTime(),
                updated: new Date().getTime(),
                loginAt: new Date().getTime(),
                status: UserConstant.status.active
            });
            await user.save();
        }
        return {
            _id: user._id,
            googleId: user.sub,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            money: user.money,
            status: user.status,
        }
    }
};
