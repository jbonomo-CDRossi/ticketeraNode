const User = require('../models/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'your_secret_key'; // Cambia esto por una clave secreta segura

exports.getLogin = (req, res) => {
  res.render('auth/login.njk');
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user && user.password === password) {
    // Autenticación exitosa
    req.login(user, (err) => {
      if (err) {
        console.log(err);
        console.log('Error al iniciar sesión');
        return res.redirect('/auth/login');
      }
      console.log('Inicio de sesión exitoso');
      return res.redirect('/');
    });
  } else {
    // Autenticación fallida
    console.log('Credenciales incorrectas');
    
    res.redirect('/auth/login');
  }
};

exports.getRegister = (req, res) => {
  res.render('auth/register.njk');
};

exports.postRegister = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
      const hashedPassword = await bcrypt.hash(password, 10); // Encripta la contraseña
      await User.create({ nombre, email, password: hashedPassword, tipo_usuario: 1 });
      res.redirect('/auth/login');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error al registrar el usuario');
  }
};

exports.logout = (req, res) => {
  req.logout((err) => {
      if (err) {
          console.log(err);
          return res.redirect('/');
      }
      res.redirect('/');
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
          return res.status(401).json({ message: 'Invalid email or password' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ id: user.id_usuario, email: user.email }, secret, { expiresIn: '1h' });
      res.json({ token });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
  }
};
