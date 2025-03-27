const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

router.get('/login', authController.getLogin);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: true
}));
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/logout', authController.logout);

// Ruta para obtener el token JWT
router.post('/jwt-login', authController.login);

module.exports = router;
