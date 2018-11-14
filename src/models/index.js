
const Sequelize = require('sequelize');
const sequelize = require('../services/db');
const UserModel = require('./user');
const PasswordRecoveryModel = require('./passwordRecovery');
const PanicModel = require('./panic');
const ContactModel = require('./contact');
const MeasurementModel = require('./measurement');
const PrescriptionModel = require('./prescription');
const ExaminationModel = require('./examination');

const models = {
  User: UserModel.init(sequelize, Sequelize),
  PasswordRecovery: PasswordRecoveryModel.init(sequelize, Sequelize),
  Panic: PanicModel.init(sequelize, Sequelize),
  Contact: ContactModel.init(sequelize, Sequelize),
  Prescription: PrescriptionModel.init(sequelize, Sequelize),
  Measurement: MeasurementModel.init(sequelize, Sequelize),
  Examination: ExaminationModel.init(sequelize, Sequelize),
};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize,
};

module.exports = db;
