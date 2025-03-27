const Ticket = require('../models/tickets');
const Estado = require('../models/estado');

// Controlador para obtener los tickets
exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll({
            include: [{ model: Estado, attributes: ['estado_ticket'], as: 'estado_ticket' }]
        });
        res.json(tickets);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los tickets');
    }
};

// Controlador para crear un ticket
exports.createTicket = async (req, res) => {
    const { email_creador, fecha_crea_t, fecha_termi_t, estado, usuario_encargado, evidencia, id_r34, det_pedido, nombre_creador } = req.body;
    try {
        const ticket = await Ticket.create({
            email_creador,
            fecha_crea_t,
            fecha_termi_t,
            estado,
            usuario_encargado,
            evidencia,
            id_r34,
            det_pedido,
            nombre_creador
        });
        res.status(201).json(ticket);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear el ticket');
    }
};
