"use strict";

module.exports = {
  up: function(queryInterface) {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Sample Product",
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        }
      ],
      {}
    );
  },

  down: function(queryInterface) {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
