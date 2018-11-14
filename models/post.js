module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    bubbleID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Post;
};
