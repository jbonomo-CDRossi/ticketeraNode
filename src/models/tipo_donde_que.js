const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_donde_que', {
    id_t_d_q: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "fk tipo",
      references: {
        model: 'tipos_pedido',
        key: 'id_tipo_ped'
      }
    },
    donde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "fk donde",
      references: {
        model: 'donde_pedido',
        key: 'id_donde_ped'
      }
    },
    que: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "fk que",
      references: {
        model: 'que_pedido',
        key: 'id_que_ped'
      }
    },
    ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "fk Tickets",
      references: {
        model: 'tickets',
        key: 'id_ticket'
      }
    }
  }, {
    sequelize,
    tableName: 'tipo_donde_que',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_t_d_q" },
        ]
      },
      {
        name: "donde_ped_",
        using: "BTREE",
        fields: [
          { name: "donde" },
        ]
      },
      {
        name: "que_ped",
        using: "BTREE",
        fields: [
          { name: "que" },
        ]
      },
      {
        name: "tipo_ped",
        using: "BTREE",
        fields: [
          { name: "tipo" },
        ]
      },
      {
        name: "tic_ped",
        using: "BTREE",
        fields: [
          { name: "ticket" },
        ]
      },
    ]
  });
};
