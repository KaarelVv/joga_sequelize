// Connect to database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// require Article model
//const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

// Import models
const models = require('../models');

// Controller function to get all articles
const getAllArticles = async (req, res) => {
    try {
        const articles = await models.Article.findAll({ include: models.Author });
        res.status(200).json(articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({ error: 'An error occurred while fetching articles' });
    }
};

// Controller function to get an article by slug
const getArticleBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const article = await models.Article.findOne({ where: { slug }, include: models.Author });
        if (article) {
            res.status(200).json(article);
        } else {
            res.status(404).json({ error: 'Article not found' });
        }
    } catch (error) {
        console.error('Error fetching article by slug:', error);
        res.status(500).json({ error: 'An error occurred while fetching the article' });
    }
};

module.exports = {
    getAllArticles,
    getArticleBySlug
};