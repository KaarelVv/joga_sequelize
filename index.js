const express = require('express');
const app = express();
const path = require('path')
const { engine } = require('express-handlebars');
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


app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,  'views', 'layouts'));

app.get('/', (req, res) => {
    res.render('main');
});


const articleRoutes = require('./routes/article');
const authorRoutes = require('./routes/author');
app.use('/', articleRoutes);
app.use('/author', authorRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
