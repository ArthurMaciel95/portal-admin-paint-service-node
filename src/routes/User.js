const rotas = require('express').Router()
const controller = require('../controllers/User')

/**
 * Define as rotas que serão relacionadas aos usuário
 * Algumas rotas conterá validação de token.
 *
 */


// Rota para criar um novo produto
rotas.post("/register", controller.register);
rotas.get('/access', controller.login)
rotas.post('/forget-password', controller.forget_password_send)
rotas.get('/reset/:token', controller.forget_password_verify)
rotas.put('/reset/password', controller.change_password)



module.exports = rotas;