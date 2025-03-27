const express = require('express');
const router = express.Router();
const apiTicketController = require('../controllers/apiTicketController');
const auth = require('../middleware/auth');

router.get('/tickets', auth.ensureAuthenticated, apiTicketController.getTickets);
router.post('/tickets', auth.ensureAuthenticated, apiTicketController.createTicket);

module.exports = router;
