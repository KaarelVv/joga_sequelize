'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.changeColumn('Articles', 'id', {
  type: Sequelize.INTEGER,
  allowNull: false,
  autoIncrement: true,
  primaryKey: true
}),
await queryInterface.changeColumn('Articles', 'name', {
  type: Sequelize.STRING,
  allowNull: false
}),
await queryInterface.changeColumn('Articles', 'slug', {
  type: Sequelize.STRING,
  allowNull: false,
  unique: true
}),
await queryInterface.changeColumn('Articles', 'image', {
  type: Sequelize.STRING,
  allowNull: false
}),
await queryInterface.changeColumn('Articles', 'body', {
  type: Sequelize.TEXT,
  allowNull: false
}),
await queryInterface.changeColumn('Articles', 'published', {
  type: Sequelize.DATE,
  allowNull: false
}),
await queryInterface.changeColumn('Articles', 'author_id', {
  type: Sequelize.INTEGER
});
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.dropTable('Articles');
  }
};
