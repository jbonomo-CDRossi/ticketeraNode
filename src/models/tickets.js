const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Estado = require('./estado');

const Ticket = sequelize.define('tickets', {
  id_ticket: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  email_creador: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  fecha_crea_t: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
    comment: "fecha creacion ticket"
  },
  fecha_termi_t: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "fecha terminado ticket"
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "fk estado del ticket",
    references: {
      model: 'estado',
      key: 'id_estado'
    }
  },
  usuario_encargado: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "fk de usuario",
    references: {
      model: 'usuarios',
      key: 'id_usuario'
    }
  },
  evidencia: {
    type: DataTypes.STRING(255),
    allowNull: true,
    comment: "Acá se agrega la evidencia de las pruebas."
  },
  id_r34: {
    type: DataTypes.STRING(45),
    allowNull: true,
    comment: "ID del formulario R-34",
    unique: "id_r34_UNIQUE"
  },
  det_pedido: {
    type: DataTypes.JSON,
    allowNull: true
  },
  nombre_creador: {
    type: DataTypes.STRING(45),
    allowNull: true
  }
}, {
  tableName: 'tickets',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id_ticket" },
      ]
    },
    {
      name: "id_r34_UNIQUE",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id_r34" },
      ]
    },
    {
      name: "us-e",
      using: "BTREE",
      fields: [
        { name: "usuario_encargado" },
      ]
    },
    {
      name: "est",
      using: "BTREE",
      fields: [
        { name: "estado" },
      ]
    },
  ]
});

Ticket.belongsTo(Estado, { foreignKey: 'estado', as: 'estado_ticket' });

module.exports = Ticket;
