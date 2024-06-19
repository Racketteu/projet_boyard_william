'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    category: DataTypes.STRING,
    price: DataTypes.FLOAT,
    imageURL:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};