const Joi = require("@hapi/joi");

const schema = Joi.object().keys({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .required()
    .regex(/^[a-zA-Z0-9]{3,30}$/),
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2 }),
  created: Joi.date().greater("1900-1-1"),
  modified: Joi.date().greater("1900-1-1")
});

exports.validate = client => Joi.validate(client, schema);
