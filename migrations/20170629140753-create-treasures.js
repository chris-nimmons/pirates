'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('treasures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.DOUBLE
      },
      longitude: {
        type: Sequelize.DOUBLE
      },
      type: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      value: {
        type: Sequelize.FLOAT
      },
      isBoobyTrapped: {
        type: Sequelize.BOOLEAN
      },
      islandId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'islands',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('treasures');
  }
};