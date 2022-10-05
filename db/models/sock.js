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
      this.belongsTo(Basket, { foreignKey: 'Socks_id' });
      this.belongsTo(Favorites, { foreignKey: 'Socks_id' });
      this.belongsTo(Order, { foreignKey: 'Socks_id' });
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
