// Connect to database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// Import models
const models = require('../models');

// Controller function to get author articles
const getAuthorArticles = async (req, res) => {
    const { id } = req.params;    
    try {
        const articles = await models.Article.findAll({ where: { AuthorId: id }, include: models.Author });
        res.status(200).json(articles);
    } catch (error) {
        console.error('Error fetching author articles:', error);
        res.status(500).json({ error: 'An error occurred while fetching the author articles' });
    }   
};

module.exports = {
    getAuthorArticles
};
