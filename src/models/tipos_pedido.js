const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
const sequelize = require('../database');

  const TiposPedido = sequelize.define('tipos_pedido', {
    id_tipo_ped: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_pedido: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'tipos_pedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipo_ped" },
        ]
      },
    ]
  });

  module.exports = TiposPedido;