'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Authors', [
  {id: 1,
    name: 'John Doe',
  },
  {id : 2,
    name: 'Jane Smith',
  }
], {});

  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Authors', null, {});
  }
};
