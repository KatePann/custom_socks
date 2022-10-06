const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Basket, Favorites, Order }) {
      // define association here
      this.hasMany(Basket, { foreignKey: 'socks_id' });
      this.hasMany(Favorites, { foreignKey: 'socks_id' });
      this.hasMany(Order, { foreignKey: 'socks_id' });
    }
  }
  Sock.init({
    color: DataTypes.STRING,
    step_color: DataTypes.STRING,
    print: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
