'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [
      {
        name: 'First Article',
        slug: 'first-article',
        image: 'https://example.com/image1.jpg',
        body: 'This is the body of the first article.',
        published: '2026-02-20',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Second Article',
        slug: 'second-article',
        image: 'https://example.com/image2.jpg',
        body: 'This is the body of the second article.',
        published: '2026-02-20',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Third Article',
        slug: 'third-article',
        image: 'https://example.com/image3.jpg',
        body: 'This is the body of the third article.',
        published: '2026-02-20',
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
