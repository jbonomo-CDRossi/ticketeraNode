const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regis_ex-tickets', {
    id_reg_ex_tick: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "fk tickets",
      references: {
        model: 'tickets',
        key: 'id_ticket'
      }
    },
    registro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "fk regis",
      references: {
        model: 'registros_externos',
        key: 'id_reg_ext'
      }
    }
  }, {
    sequelize,
    tableName: 'regis_ex-tickets',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reg_ex_tick" },
        ]
      },
      {
        name: "tic",
        using: "BTREE",
        fields: [
          { name: "ticket" },
        ]
      },
      {
        name: "reg",
        using: "BTREE",
        fields: [
          { name: "registro" },
        ]
      },
    ]
  });
};
