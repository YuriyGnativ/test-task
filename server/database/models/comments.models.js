const sequelize = require("..");
const { DataTypes } = require("sequelize");
const Products = require("./products.models");

const Comments = sequelize.define(
  "comments",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Comments.belongsTo(Products, {
  targetKey: "id",
  foreignKey: {
    name: "product_id",
  },
  // as: "id",
});

module.exports = Comments;
