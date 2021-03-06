
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('measurements', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      pressure: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sugar: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      temperature: {
        type: Sequelize.STRING,
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

  down: queryInterface => queryInterface.dropTable('measurements'),
};
