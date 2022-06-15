const UserModel = require('../../Database/mongodb.database').User

module.exports = {
    getByEmail: async function (email){
        let result;

        try {

            let filter = { isDelete: false, email: email }
            result = await UserModel.findOne(filter)

            if(!result) result = null
            
        } catch (error) {
            result = null
            console.log(error);
        }

        return result
    }
}