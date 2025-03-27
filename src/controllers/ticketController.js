const Ticket = require('../models/tickets');
const User = require('../models/usuarios');
const Estado = require('../models/estado');

exports.getCreateTicket = (req, res) => {
    res.render('tickets/create.njk');
};

exports.postCreateTicket = async (req, res) => {
    const { email_creador, fecha_crea_t, fecha_termi_t, estado, usuario_encargado, evidencia, id_r34, det_pedido, nombre_creador } = req.body;
    try {
        await Ticket.create({
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
        res.redirect('/tickets/list');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear el ticket');
    }
};

exports.getListTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll({
            include: [{ model: Estado, attributes: ['estado_ticket'], as: 'estado_ticket' }]
        });
        res.render('tickets/list.njk', { tickets });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los tickets');
    }
};

exports.getTicketDetail = async (req, res) => {
    try {
        console.log(req.params);

        const ticket = await Ticket.findByPk(req.params.id, {
            include: [{ model: Estado, attributes: ['estado_ticket'], as: 'estado_ticket' }]
        });
        if (!ticket) {
            return res.status(404).send('Ticket no encontrado');
        }
        res.render('tickets/detail.njk', { ticket });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener el detalle del ticket');
    }
};

exports.postUpdateTicket = async (req, res) => {
    const { estado, id_usuario_asignado } = req.body;
    try {
        await Ticket.update({ estado, id_usuario_asignado }, { where: { id_ticket: req.params.id_ticket } });
        res.redirect(`/tickets/detail/${req.params.id_ticket}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar el ticket');
    }
};

exports.postCommentTicket = async (req, res) => {
    // lógica para agregar un comentario a un ticket
};
