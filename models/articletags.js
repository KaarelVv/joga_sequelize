'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Article, {
        foreignKey: 'articleId'
      });
      this.belongsTo(models.Tags, {
        foreignKey: 'tagId'
      });
    }
  }
  ArticleTags.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Articles',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tags',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'ArticleTags',
  });
  return ArticleTags;
};
