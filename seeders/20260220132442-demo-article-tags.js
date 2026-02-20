'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('ArticleTags', [
  {
    ArticleId: 1,
    TagId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    ArticleId: 1,
    TagId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    ArticleId: 2,
    TagId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    ArticleId: 2,
    TagId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    ArticleId: 3,
    TagId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    ArticleId: 3,
    TagId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  }
], {});

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('ArticleTags', null, {});
  }
};
