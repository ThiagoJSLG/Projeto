const mongoose = require("mongoose"); //Aula 11/09/23
const Schema = mongoose.Schema;

const clienteSchema = Schema({
    id: Number,
    nome: String,
    idade: Number    
    });

    module.exports = mongoose.model("Cliente", clienteSchema);
    //^^ importante, sempre colocar em classes