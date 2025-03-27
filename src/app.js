const express = require('express');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const sequelize = require('./database');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

nunjucks.configure('src/views', {
    autoescape: true,
    express: app
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Middleware para pasar la variable user a todas las plantillas
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/tickets', ticketRoutes);

app.get('/', (req, res) => {
    res.render('index.njk');
});

sequelize.authenticate().then(() => {
    console.log('Conectado a la base de datos!');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('No nos conectamos a la BBDD:', err);
});
