const ErrorBuilder = require('../../Utils/error.util')
const UserServices = require('../User/user.service')
const AuthServices = require('./auth.service')

module.exports = {
    login: async function (req, res, next) {
        
        let find_email = await UserServices.getByEmail(req.body.email)
        if(!find_email) return ErrorBuilder({ statusCode: 400, isOperational: true, message: "Can't found your credential"}, req, res)
        
        let login = await AuthServices.login(find_email)
        if(login?.status === "ValidationError") return ErrorBuilder({ statusCode: 400, isOperational: true, status: "Validation Failed", message: login.message}, req, res)
        if(!login) return ErrorBuilder({ statusCode: 400, isOperational: true, message: "Can't found your credential"}, req, res)

        res.status(200).json({
            status: 'success',
            token: login.token,
            item: login.items
        })

    }
}