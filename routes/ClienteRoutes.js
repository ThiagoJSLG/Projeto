const express = require("express");
const routes = express.Router();
const clienteController = require("../controllers/ClienteControllerDB"); // "ClienteControllerDB" Para database / "ClienteControllerVetor" Para Vetor

routes.post("/clientes", clienteController.cadastrar);

routes.get("/clientes/cadastrar", clienteController.cadastrarGet);

routes.get("/clientes/cadastrar/:id?", clienteController.cadastrarGet);

//routes.get("/clientes", clienteController.clienteRelatar);

routes.get("/clientes/", clienteController.listarCliente);

routes.get("/clientes/:id", clienteController.detalharCliente);

routes.get("/clientes/remover/:id", clienteController.remover);

module.exports = routes;