const session = require("express-session");
const express = require('express');
const app = express();
require('dotenv/config');
app.set("view engine", "ejs"); // Aula 21/08/2023
app.use(express.urlencoded({ extended: true})); // Aula 28/08/23
app.use(express.static('public')); // Aula 04/09/23
const ClienteRoutes = require("./routes/ClienteRoutes"); // Aula 18/09/23
app.use(ClienteRoutes);
const UsuarioRoutes = require("./routes/UsuarioRoutes"); // Aula 18/09/23
app.use(UsuarioRoutes);
app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false}));

const mongoose = require("mongoose"); // Aula 11/09/23
mongoose.connect(process.env.MONGO_URI); // Aula 11/09/23
// Comentar apenas se for usar Vetor

//app.get("/", function(req, res){
//    res.send("Página Inicial 2");
//
//}); Sem Uso

app.get("/dados", function(req, res){
//    const nome = req.query.nome;
//    const idade = req.query.idade;
//    res.send(`Seu nome é ${nome} e você tem ${idade} anos.`);
//
}); // Sem Uso

app.post("/clientesOLD_CADASTRAR", async function(req, res){ // Aula 28/08/23
    //const cliente = req.body;
    //const c = new Cliente(cliente.id, cliente.nome, cliente.idade);
    //listaCliente.push(c);
    //OLD    

    //const novoCliente = new ClienteModel({ // Aula 11/09/23
    //    id:3,
    //    nome: "José",
    //    idade: 32
    //});
    //await novoCliente.save(); //end  
    //res.redirect("/clientes?s=1");
});// Sem Uso

// Aula 21/08/2023
app.get("/", function(req, res){
    const pessoa = {
        nome: "Rafael",
        curso: "Computação"
    };
    res.render("index", {pessoa});

});
// Exercicio 1 e 2 no ClienteController

app.use(function(req, res){
    res.status(404).render("404");
});

app.listen(process.env.PORT, function(){
    console.log("Nice");

})