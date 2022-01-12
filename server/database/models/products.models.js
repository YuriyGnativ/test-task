const { DataTypes } = require("sequelize");
const { Comments } = require(".");
const sequelize = require("..");

const Products = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    count: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.JSONB,
    },
  },
  {
    timestamps: false,
  }
);

// Products.hasMany(Comments)

module.exports = Products;
