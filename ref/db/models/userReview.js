module.exports = function(sequelize, DataTypes) {
  var UserReview = sequelize.define("UserReview", {
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0.0
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  UserReview.associate = function(models) {
    UserReview.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    UserReview.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });
    UserReview.belongsTo(models.Location, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return UserReview;
};
