const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Estado = sequelize.define('estado', {
  id_estado: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  estado_ticket: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descr_est: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: "descripcion del estado"
  }
}, {
  tableName: 'estado',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id_estado" },
      ]
    },
  ]
});

module.exports = Estado;
