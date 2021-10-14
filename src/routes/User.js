const rotas = require('express').Router()
const controller = require('../controllers/User')

/**
 * Define as rotas que serão relacionadas aos usuário
 * Algumas rotas conterá validação de token.
 *
 */


// Rota para criar um novo produto
rotas.post("/register", controller.register);



module.exports = rotas;