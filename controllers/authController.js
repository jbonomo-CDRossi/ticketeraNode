const bcrypt = require('bcrypt');
const User = require('../models/usuarios');

exports.getLogin = (req, res) => {
    res.render('auth/login.njk');
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
        // Autenticación exitosa
        req.login(user, (err) => {
            if (err) {
                return res.redirect('/auth/login');
            }
            return res.redirect('/');
        });
    } else {
        // Autenticación fallida
        res.redirect('/auth/login');
    }
};

exports.getRegister = (req, res) => {
    res.render('auth/register.njk');
};

exports.postRegister = async (req, res) => {
    const { nombre, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Encripta la contraseña
    await User.create({ nombre, email, password: hashedPassword, tipo_usuario: 1 });
    res.redirect('/auth/login');
};
