const Services = require('../../Helpers/service.helper')
const UserModel = require('../../Database/mongodb.database').User

module.exports = {
    create: Services.create(UserModel),
    getAll: Services.getAll(UserModel),
}