const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/create', ensureAuthenticated, ticketController.getCreateTicket);
router.post('/create', ensureAuthenticated, ticketController.postCreateTicket);
router.get('/list', ensureAuthenticated, ticketController.getListTickets);
router.get('/detail/:id', ensureAuthenticated, ticketController.getTicketDetail);
router.post('/update/:id', ensureAuthenticated, ticketController.postUpdateTicket);
router.post('/comment/:id', ensureAuthenticated, ticketController.postCommentTicket);

module.exports = router;
