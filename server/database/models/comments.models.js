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
    inner_text: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.INTEGER,
    },
    dislikes: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Comments.belongsTo(Products, {
  targetKey: "url",
  foreignKey: {
    name: "product_url",
  },
  as: "url",
});

module.exports = Comments;
