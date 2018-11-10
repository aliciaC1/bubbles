"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("Locations", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      areaCode: { type: Sequelize.STRING },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: null
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: null
      }
    });
  },

  down: function(queryInterface) {
    return queryInterface.dropTable("Locations");
  }
};
