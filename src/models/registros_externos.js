const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registros_externos', {
    id_reg_ext: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo_reg: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "codigo de el registro en su BBDD original"
    },
    'descripción': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "descripción del registro."
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "url donde se encuentra el registro."
    },
    dispo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "si se puede enviar información via API al registro."
    }
  }, {
    sequelize,
    tableName: 'registros_externos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reg_ext" },
        ]
      },
    ]
  });
};
