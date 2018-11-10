"use strict";

module.exports = {
  up: function(queryInterface) {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "T-Shirt",
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          name: "Fidget Spinner",
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          name: "Key Chain",
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
