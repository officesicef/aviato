
const statuses = ['active', 'inactive'];

const BLOOD_TYPES = [
  "0+",
  "0-",
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
];

const genderValues = ['M', 'F'];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      doctorId: {
        type: Sequelize.UUID,
        allowNull: true,
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
        values: BLOOD_TYPES,
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
        values: statuses,
        allowNull: false,
      },
      registerToken: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => queryInterface.dropTable('users'),
};
