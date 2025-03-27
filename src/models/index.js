const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const Ticket = sequelize.define('Ticket', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM('Ingresado', 'En Proceso', 'Resuelto', 'Terminado'),
        defaultValue: 'Ingresado',
    },
});

User.hasMany(Ticket);
Ticket.belongsTo(User);

module.exports = { User, Ticket, sequelize };
