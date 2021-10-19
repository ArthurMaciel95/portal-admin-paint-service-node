const rotas = require('express').Router()
const controller = require('../controllers/Product')

/**
 * Define as rotas que serão relacionadas aos clients
 * Algumas rotas conterá validação de token.
 *
 */

// Rota para listar todos os produtos
rotas.get("/list", controller.list_all)

// Rota para criar um novo produto
rotas.post("/create", controller.create);

// Rota para listar um unico produto
rotas.get("/list/:id", controller.list_one);

// Rota para deletar um unico produto
rotas.delete("/delete/:id", controller.delete);

// Rota para atualiazar um produto
rotas.put("/update/:id", controller.update);

module.exports = rotas;