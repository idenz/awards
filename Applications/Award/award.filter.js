const ErrorBuilder = require("../../Utils/error.util");
const Joi = require("joi");

module.exports = {
  filter: async function (req, res, next) {
    try {
        req.query.filter = req.query.filter ? JSON.parse(req.query.filter) : {}

        return next()
    } catch (error) {
      console.log(error);
      return ErrorBuilder(error, req, res);
    }
  },
}
