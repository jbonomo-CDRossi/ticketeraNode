const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prioridad_ticket', {
    id_prioridad_ticket: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prioridad_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_prioridad',
        key: 'id_tipos_prioridad'
      }
    },
    fecha_asignacion_p: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    usuario_fk_p: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    ticket_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tickets',
        key: 'id_ticket'
      }
    }
  }, {
    sequelize,
    tableName: 'prioridad_ticket',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_prioridad_ticket" },
        ]
      },
      {
        name: "f_k_t_p",
        using: "BTREE",
        fields: [
          { name: "ticket_fk" },
        ]
      },
      {
        name: "f_k_u_p",
        using: "BTREE",
        fields: [
          { name: "usuario_fk_p" },
        ]
      },
      {
        name: "f_k_tipo_p",
        using: "BTREE",
        fields: [
          { name: "prioridad_fk" },
        ]
      },
    ]
  });
};
