'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      {
        name: 'yogapractice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mindfulness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'wellness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'meditation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'selfcare',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fitness',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Tags', null, {});
  }
};
