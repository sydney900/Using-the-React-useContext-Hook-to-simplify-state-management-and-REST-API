const Joi = require("@hapi/joi");

const schema = Joi.object().keys({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  created: Joi.date().greater("1900-1-1"),
  modified: Joi.date().greater("1900-1-1")
});

exports.validate_product = product => Joi.validate(product, schema);
