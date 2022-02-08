const { Model, DataTypes } = require("sequelize");

class Movie extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      year: DataTypes.INTEGER,
      director: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "registrator" });
  }
}

module.exports = Movie;