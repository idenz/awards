const Services = require('../../Helpers/service.helper')
const AwardModel = require('../../Database/mongodb.database').Award

module.exports = {
    create: Services.create(AwardModel),
    getAll: Services.getAll(AwardModel),
}