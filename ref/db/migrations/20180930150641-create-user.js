"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("Users", {
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
      name: { type: Sequelize.STRING },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hash: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: function(queryInterface) {
    return queryInterface.dropTable("Users");
  }
};
