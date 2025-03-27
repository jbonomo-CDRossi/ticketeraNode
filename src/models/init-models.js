var DataTypes = require("sequelize").DataTypes;
var _prioridad_ticket = require("./prioridad_ticket");

function initModels(sequelize) {
  var prioridad_ticket = _prioridad_ticket(sequelize, DataTypes);

  prioridad_ticket.belongsTo(tickets, { as: "ticket_fk_ticket", foreignKey: "ticket_fk"});
  tickets.hasMany(prioridad_ticket, { as: "prioridad_tickets", foreignKey: "ticket_fk"});
  prioridad_ticket.belongsTo(tipos_prioridad, { as: "prioridad_fk_tipos_prioridad", foreignKey: "prioridad_fk"});
  tipos_prioridad.hasMany(prioridad_ticket, { as: "prioridad_tickets", foreignKey: "prioridad_fk"});
  prioridad_ticket.belongsTo(usuarios, { as: "usuario_fk_p_usuario", foreignKey: "usuario_fk_p"});
  usuarios.hasMany(prioridad_ticket, { as: "prioridad_tickets", foreignKey: "usuario_fk_p"});

  return {
    prioridad_ticket,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
