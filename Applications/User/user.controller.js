const Services = require('../../Helpers/service.helper')
const UserModel = require('../../Database/mongodb.database').User
const UserServices = require("./user.service")

const ErrorBuilder = require('../../Utils/error.util')

module.exports = {
    getAll: Services.getAll(UserModel),

    create: async function(req, res, next){

        let user = await UserServices.create(req.body)
        if(user === 1) return ErrorBuilder({ statusCode: 400, isOperational: true, message: "This email has been register"}, req, res)
        if(!user) return ErrorBuilder({ statusCode: 400, isOperational: true, message: "Failed create user"}, req, res)

        res.status(200).json({
            status: 'success',
            item: user
        })
    },
    
    getProfile: async function(req, res, next) {

        let result = await UserServices.getByEmail(req.user.email)
        if(!result) return ErrorBuilder({ statusCode: 400, isOperational: true, message: "Can't found data"}, req, res)

        res.status(200).json({
            status: 'success',
            item: result
        })
    }
}