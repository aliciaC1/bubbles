'use strict';

module.exports = {
  up: function (queryInterface) {
    //queryInterface.bulkDelete("Locations");
    return queryInterface.bulkInsert("Locations", [
      {
        name: "New York",
        areaCode: "NY",
        address: "New York, NY",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Detroit",
        areaCode: "DT",
        address: "Detroit, MI",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cleveland",
        areaCode: "CL",
        address: "Cleveland, OH",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: function (queryInterface) {
    return queryInterface.bulkDelete("Locations", null, {});
  }
};
