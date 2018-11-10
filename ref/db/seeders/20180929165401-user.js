"use strict";

module.exports = {
  up: function(queryInterface) {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Sample User",
          email: "john@doe.com",
          salt:
            "FHyuciu8U+AlD+WUFgfbRC1C7rSjeUc1lkdMIE0MWMIDEZYYJ3D32zfAMIGnbCHEno4TPWG5u3VVnHj/Em0XGw==",
          hash:
            "4aGORMwbEELs5nqz186lB606cUZ+MLHp7cduuQNWsybyzVyxkQoS/VlWRVyprJf69I2KOENI5CuLRs0P0LzwaZZKaAUmO2vfIvGLHndzOCeo86OPyWXprrZ/H8TALYvZrEUCXSPLeSNhmV0oSkuOSDexMPFokV95saxlUsnJGnU=",
          createdAt: new Date(),
          updatedAt: new Date(),
          username: "john@doe.com"
        }
      ],
      {}
    );
  },

  down: function(queryInterface) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
