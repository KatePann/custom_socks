const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
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
  Favorites.init({
    user_id: DataTypes.INTEGER,
    socks_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};
