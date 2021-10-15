const rotas = require("express").Router();

const controller = require("../controllers/Client");

/**
 * Define as rotas que serão relacionadas aos clients
 * Algumas rotas conterá validação de token.
 *
 */

// Rota para criar um novo cliente no sistema
rotas.post("/create", controller.register);

// Rota para listar um cliente 
rotas.get("/list/:id", controller.list_one);

// Rota para listar todos os clientes
rotas.get("/list", controller.list_all);

// Rota para atualizar um cliente
rotas.put("/update/:id", controller.update)

module.exports = rotas;
