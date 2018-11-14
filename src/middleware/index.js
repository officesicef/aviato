const logger = require('services/logger');
const auth = require('./auth');
const admin = require('./admin');
const validate = require('./validate');
const doctor = require('./doctor');

const mapping = {
  auth,
  admin,
  validate,
  doctor,
};

module.exports = (middleware) => {
  if (mapping[middleware]) {
    return mapping[middleware];
  }

  logger.warn(`Middleware ${middleware} not registered.`);
  return (req, res, next) => next();
};
