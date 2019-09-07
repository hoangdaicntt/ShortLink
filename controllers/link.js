const LinkModel = require('../models/link');
const LinkConstant = require('../constants/link');
const environment = require('../environment');

module.exports = class LinkController {
    static async getUid() {
        let uid = Math.random().toString(36).substring(environment.uidLength);
        while (await LinkModel.findOne({uid: uid})) {
            uid = Math.random().toString(36).substring(environment.uidLength);
        }
        return uid;
    }

    static async createShortLink(urlLong, googleId, type) {
        const link = new LinkModel({
            urlLong: urlLong,
            uid: await this.getUid(),
            googleId: googleId,
            type: type,
            created: new Date().getTime(),
            updated: new Date().getTime(),
            status: LinkConstant.status.active
        });
        return link.save();
    }

    static async getLongLink(uid) {
        const link = await LinkModel.findOne({uid: uid});
        return link ? link.urlLong : null;
    }
};
