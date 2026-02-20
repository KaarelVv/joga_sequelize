const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// Connect to database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// Test database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established to the database successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const articleRoutes = require('./routes/article');
const authorRoutes = require('./routes/author');
app.use('/', articleRoutes);
app.use('/article', articleRoutes);
app.use('/author', authorRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
