const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/usuarios'); // Asegúrate de que la ruta sea correcta
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { nombre: username } });
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id_usuario);
});

passport.deserializeUser(async (id_usuario, done) => {
  try {
    const user = await User.findByPk(id_usuario);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
