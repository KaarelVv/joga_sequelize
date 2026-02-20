'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
        // define association here
        this.hasMany(models.Article, {
            foreignKey: {
                name: 'AuthorId',
                field: 'author_id'
            }
        });
    }
  }

  Author.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Author',
    timestamps: false
  });

  return Author;
};
