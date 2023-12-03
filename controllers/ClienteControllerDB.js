const ClienteModel = require("../models/ClienteModel");
const clienteSchema = require("../models/ClienteModel");

class ClienteControllerDB{
    static async cadastrar(req,res){
        const _id = req.body._id;
        if (req.body._id == ""){
            const novoCliente = new clienteSchema({ // Aula 11/09/23 e Aula 18/09/23
                id: req.body.id,
                nome: req.body.nome,
                idade: req.body.idade
            });
            await novoCliente.save(); //end
        }
        else{
            await ClienteModel.findOneAndUpdate({_id: req.body._id}, {
                nome: req.body.nome,
                idade: req.body.idade
            });
        };        
        res.redirect("/clientes?s=1");
    }

    static async remover(req, res){
        await ClienteModel.findOneAndDelete({id: req.params.id});
        res.redirect("/clientes?r=1");
    }

    static async listarCliente(req,res){

        const salvo = req.query.s;
        const removido = req.query.r;
        const dbClientes = await clienteSchema.find();
        console.log(dbClientes)
        res.render("cliente/relatorio", {dbClientes, salvo, removido});
    }   

    static async cadastrarGet(req,res){
        const id = req.params._id;
        let cliente = {};
        if (id != undefined){
            cliente = await UsuarioCliente.findOne({id: req.params.id});
        }
        res.render("cliente/cadastrar", {cliente});
    }

    static async detalharCliente(req, res){
        const cliente = await ClienteModel.findOne({id: req.body.id});
        res.render("cliente/detalhar", {cliente});
    }
};


module.exports = ClienteControllerDB;