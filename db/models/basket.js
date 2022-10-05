const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Sock }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'User_id' });
      this.hasMany(Sock, { foreignKey: 'Socks_id' });
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER,
    socks_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
