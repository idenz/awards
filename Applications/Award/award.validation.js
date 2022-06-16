const ErrorBuilder = require("../../Utils/error.util");
const Joi = require("joi");

module.exports = async function (req, res, next) {
  try {
    const schema = Joi.object({
      name: Joi.string().min(5).required(),
      type: Joi.string().valid("voucher", "product", "giftcard"),
      point: Joi.number().required(),
      images: Joi.string(),
    });

    const { error } = schema.validate(req.body);
    if (error)
      return ErrorBuilder(
        {
          statusCode: 400,
          status: error.name,
          isOperational: true,
          message: error.details[0].message,
        },
        req,
        res
      );

    next();
  } catch (error) {
    console.log(error);
    return ErrorBuilder(error, req, res);
  }
};
