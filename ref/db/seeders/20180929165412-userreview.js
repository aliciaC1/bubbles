"use strict";

module.exports = {
  up: function(queryInterface) {
    return queryInterface.bulkInsert(
      "UserReviews",
      [
        {
          price: 25.0,
          description: "Sample User Review Description",
          UserId: 1,
          ProductId: 1,
          LocationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          price: 13.0,
          description: "Sample User Review Description #2",
          UserId: 1,
          ProductId: 1,
          LocationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface) {
    return queryInterface.bulkDelete("UserReviews", null, {});
  }
};
