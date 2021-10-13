const rotas = require('express').Router();

const controller = require('../controllers/Client');

/**
 * Define as rotas que serão relacionadas aos clients
 * Algumas rotas conterá validação de token.
 *
 */
rotas.get('/access', controller.login);
rotas.post('/register', controller.register);
rotas.get('/:id/show', controller.show);

module.exports = rotas;
