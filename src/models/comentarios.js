const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentarios', {
    id_com: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tickets',
        key: 'id_ticket'
      }
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    fecha_com: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comentarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_com" },
        ]
      },
      {
        name: "fk_tickettt",
        using: "BTREE",
        fields: [
          { name: "ticket" },
        ]
      },
      {
        name: "fk_usu",
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
    ]
  });
};
