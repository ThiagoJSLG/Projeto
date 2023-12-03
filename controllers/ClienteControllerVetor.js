//const ClienteModel = require("../models/ClienteModel");
const Cliente = require('../Cliente');
//const listaCliente = [c1,c2,c3];

// Exercicio 1 e 2 de 14/08/23 corrigido / Colocar no Index.js
//const c1 = new Cliente(1, "Rafael", 10);
//const c2 = new Cliente(2, "João", 20);
//const c3 = new Cliente(3, "Maria", 30);
//const listaCliente = [c1,c2,c3];
// End

class ClienteControllerV{
    static async cadastrar(req,res){
        const cliente = req.body;
        const c = new Cliente(cliente.id, cliente.nome, cliente.idade);
        listaCliente.push(c);
        res.redirect("/clientes?s=1");

        //OLD 

        //const novoCliente = new ClienteModel({ // Aula 11/09/23
        //    id:3,
        //    nome: "José",
        //    idade: 32
        //});
        //await novoCliente.save(); //end         
    }

    static cadastrarGet(req,res){
        res.render("cliente/cadastrar");
    }

    static async listarCliente(req,res){
    //    const salvo = req.query.s;
    //    const vetorClientes = await c.find();
    //    res.render("cliente/relatorio", {vetorClientes, salvo});

    //app.get("/clientes/", function(req, res){ (se fosse Index.js)
    //        let html = "";
    //    for (const c of listaCliente) {
    //        html += `
    //        Nome: ${c.id}<br>
    //        Nome: ${c.nome}<br>
    //        Nome: ${c.idade}<br><br>
    //        `;
    //    }
    //    res.send(html);
    //    res.send(listaCliente);
        //res.send(`Seu is é ${id}, seu nome é ${nome} e você tem ${idade} anos`);
    //});
    }

    static detalharCliente(req, res){
        const id = req.params.id;
        let encontrou = false;
        for (const cliente of listaCliente) {
            if (id == cliente.id){
                encontrou=true;
                res.render("cliente/detalhar", {cliente});
                break;
            }
        }
            if (encontrou==false){
                res.send("Cliente não encontrado");
            }
    };

//    static ClienteID(){
        //app.get("/clientes/:id?", function(req, res){
//        const salvo = req.query.s;
//        const id = req.params.id;
            
//        if (id == undefined){
//            res.render("clientes/relatorio", {listaCliente, salvo})
//        }else{
//                
//        }
        //});
//    }

    static clienteRelatar(){
        //app.get("/clientes", function(req, res){
        res.render("clientes/relatorio", {listaCliente});
        //});
    }
    
    static oldCode(){
        //app.get("/clientes/:id?", function(req, res){
//    const codigo = req.params.id;
//    if (codigo == undefined){
//        res.send("Listagem de clientes");
//    } 
//    else{
//        res.send(`Seus dados são-> Código: ${codigo}`);
//    }
//
//});


//app.get("/clientes1/:id?", function(req, res){
    //    const id = req.params.id;
    //    let html = "";
    //    if (id == undefined){
    //        for (const c of listaCliente) {
    //            html += `
    //            Nome: ${c.id}<br>
    //            Nome: ${c.nome}<br>
    //            Nome: ${c.idade}<br><br>
    //            `;
    //        }
    //    }    
    //    else{
    //        for (const c of listaCliente) {
    //            if (c.id == id){
    //                html += `
    //                Nome: ${c.id}<br>
    //                Nome: ${c.nome}<br>
    //                Nome: ${c.idade}<br><br>
    //                `;
    //                break;
    //            }
    //        }
    //        res.send(html);
    //    }    
    //    //res.send(listaCliente);
    //    //res.send(`Seu is é ${id}, seu nome é ${nome} e você tem ${idade} anos`);
//    }); // End, Sem Uso
    
    //app.get("/clientes/:id", function(req, res){
    //    const listaCliente = req.params.id;
    //
    //    for (const c of listaCliente) {
    //        if (listaCliente == undefined){
    //            res.send("Sem id");
    //        } 
    //        else{
    //            res.send(`Seu nome é ${c.nome} e você tem ${c.idade} anos`);
    //        }
    //    }
    //}); // Sem Uso

    }

};

module.exports = ClienteControllerV;