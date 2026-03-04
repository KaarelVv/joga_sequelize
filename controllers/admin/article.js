
// Import models
const models = require('../../models');
const { renderEditArticleView } = require('../../views/admin/article/edit');

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
            return res.status(404).send('<h1>Article not found</h1>');
        }

        return res.status(200).send(renderEditArticleView({
            article,
            isUpdated: req.query.updated === '1'
        }));
    } catch (error) {
        console.error('Error rendering article edit form:', error);
        return res.status(500).send('<h1>Failed to load article edit form</h1>');
    }
};

// Controller function to edit article
const editArticle = async (req, res) => {
    try {
        let id = req.params.id;
        let name = req.body.name;
        let slug = req.body.slug;
        let image = req.body.image;
        let body = req.body.body;

        await models.Article.update({
            name: name,
            slug: slug,
            image: image,
            body: body,
        }, {
            where: {
                id: id
            }
        });

        if ((req.headers.accept || '').includes('text/html')) {
            return res.redirect(`/admin/article/edit/${id}?updated=1`);
        }

        res.status(200).json({ message: 'Article updated successfully' });
    } catch (error) {
        console.error('Error updating article ', error);
        res.status(500).json({ error: 'An error occurred while updating the article' });
    }
};
   

module.exports = {
    createArticle,
    editArticle,
    renderEditArticleForm
};
