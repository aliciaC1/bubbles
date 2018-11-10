"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn("Users", "username", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
  },

  down: function(queryInterface) {
    return queryInterface.removeColumn("Users", "username");
  }
};
