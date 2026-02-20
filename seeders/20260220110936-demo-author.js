'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Authors', [
  {
    name: 'John Doe',
  },
  {
    name: 'Jane Smith',
  }
], {});

  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Authors', null, {});
  }
};
