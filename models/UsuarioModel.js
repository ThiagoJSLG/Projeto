const mongoose = require("mongoose"); //Aula 11/09/23
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
    email: String,
    nome: String,
    senha: String    
    });

    module.exports = mongoose.model("Usuario", usuarioSchema);
    //^^ importante, sempre colocar em classes