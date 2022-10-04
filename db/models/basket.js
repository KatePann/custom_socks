'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER,
    socks_id: DataTypes.INTEGER,
    purchase: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};