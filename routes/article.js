const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const adminArticleController = require('../controllers/admin/article');

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);

router.post('/admin/article/create', adminArticleController.createArticle);

module.exports = router;