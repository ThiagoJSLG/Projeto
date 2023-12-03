const express = require("express");
const routes = express.Router();
const usuarioController = require("../controllers/UsuarioControllerDB");
const auth = require("../middlewares/usuarioAuth");

routes.post("/usuarios", usuarioController.cadastrar);

routes.get("/usuarios/cadastrar/:_id?", usuarioController.cadastrarGet);

routes.post("/usuarios/login", usuarioController.loginPost);
routes.get("/usuarios/login", usuarioController.loginGet);

routes.get("/usuarios/", usuarioController.listarUsuario);

routes.get("/usuarios/remover/:_id", auth, usuarioController.remover);

routes.get("/usuarios/:_id?", auth, usuarioController.detalharUsuario);


module.exports = routes;