
// Import models
const models = require('../../models');

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
            image: image, // Assuming you have an image URL or path
            body: body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' ') // Set published date to current date and time
        });
        console.log(newArticle);
        res.status(201).json({ message: 'Article created successfully' });
    } catch (error) {
        console.error('Error creating article:', error);
        res.status(500).json({ error: 'An error occurred while creating the article' });
    }
};

module.exports = {
    createArticle
};
