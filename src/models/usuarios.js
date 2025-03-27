const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
}, {
    tableName: 'usuarios', // Asegúrate de que el nombre de la tabla coincida con el de tu base de datos
    timestamps: false, // Deshabilita los campos createdAt y updatedAt
});

module.exports = User;
