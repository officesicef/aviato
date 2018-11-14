const Sequelize = require('sequelize');

const STATUSES = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

const BLOOD_TYPES = {
  '0+': '0+',
  '0-': '0-',
  'A+':'A+',
  'A-':'A-',
  'B+':'B+',
  'B-':'B-',
  'AB+':'AB+',
  'AB-':'AB-',
};

const genderValues = ['M', 'F'];

const schema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isDoctor: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  doctorId: {
    type: Sequelize.UUID,
    allowNull: true,
  },
  height: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  bloodType: {
    type: Sequelize.ENUM,
    values: Object.values(BLOOD_TYPES),
    allowNull: true,
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  gender: {
    type: Sequelize.ENUM,
    values: genderValues,
    allowNull: true,
  },
  status: {
    type: Sequelize.ENUM,
    values: Object.values(STATUSES),
    allowNull: false,
    defaultValue: STATUSES.INACTIVE,
  },
  registerToken: {
    type: Sequelize.UUID,
    allowNull: true,
  },
};

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(schema, {
      sequelize,
      tableName: 'users',
    });
  }

  static associate(models) {
    this.userPasswordRecoveryAssociation = this.hasMany(models.PasswordRecovery, {
      as: 'passwordRecoveries',
      foreignKey: 'userId',
    });
    this.panicAssociation = this.hasMany(models.Panic, {
      as: 'panics',
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
    this.contactAssociation = this.hasMany(models.Contact, {
      as: 'contacts',
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
    this.prescriptionAssociation = this.hasMany(models.Prescription, {
      as: 'prescriptions',
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
    this.measurementAssociation = this.hasMany(models.Measurement, {
      as: 'measurements',
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
    this.examinationsAssociation = this.hasMany(models.Examination, {
      as: 'examinations',
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
  }
}

module.exports = User;
module.exports.STATUSES = STATUSES;
module.exports.STATUSES_ARRAY = Object.values(STATUSES);
