const Joi = require('joi');

module.exports = {
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  isDoctor: Joi.boolean().required(),
};
