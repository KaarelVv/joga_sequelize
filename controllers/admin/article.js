
// Import models
const models = require('../../models');
const renderEditArticleView = require('../../views/admin/article/edit.hbs');

// Controller function to create a new article
const createArticle = async (req, res) => {
    try {
        let name = req.body.name;
        let slug = req.body.slug;
        let image = req.body.image;
        let body = req.body.body;

        const newArticle = await models.Article.create({
            name: name,
            slug: slug,
            image: image,
            body: body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' ')
        });
        console.log(newArticle);
        res.status(201).json({ message: 'Article created successfully' });
    } catch (error) {
        console.error('Error creating article:', error);
        res.status(500).json({ error: 'An error occurred while creating the article' });
    }
};

const renderEditArticleForm = async (req, res) => {
    try {
        const article = await models.Article.findByPk(req.params.id);

        if (!article) {
            return res.status(404).send('Article not found');
        }
        const recivedArticle = {
            id: article.id,
            name: article.name,
            slug: article.slug,
            image: article.image,
            body: article.body,
        }

        return res.status(200).send(renderEditArticleView({
            recivedArticle,
            isUpdated: req.query.updated === '1'
        }));
    } catch (error) {
        console.error('Error rendering article edit form:', error);
        return res.status(500).send('Failed to load article edit form');
    }
};

// Controller function to edit article
const editArticle = async (req, res) => {
    try {
        const article = await models.Article.findByPk(req.params.id);
        if (!article) {
            return res.status(404).send({ message: 'Article not found' });
        }
        const recivedArticle = {
            name: article.name,
            slug: article.slug,
            image: article.image,
            body: article.body,
        }
        await models.Article.update({
            recivedArticle
        }, {
            where: {
                id: id
            }
        });

        return res.status(200).json({ message: 'Article updated successfully' });
    } catch (error) {
        console.error('Error updating article ', error);
        res.status(500).json({ error: 'An error occurred while updating the article' });
    }
};
const deleteArticle = async (req, res) => {
    try {
        const articleId = req.params.id;
        const deleteRowCount = await models.Article.destroy({
            where: { id: articleId }
        })

        if (deleteRowCount === 0) {
            return res.status(404).json({ message: "Article not found" });
        }

        return res.status(200).json({ message: "Article deleted successfully" })
    }
    catch (error) {
        console.error('Error deleting article ', error);
        res.status(500).json({ error: 'An error occurred while deleting the article' });
    }
}


module.exports = {
    createArticle,
    editArticle,
    renderEditArticleForm,
    deleteArticle

};
