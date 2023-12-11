const { param } = require("express/lib/request");
const bcryptjs = require("bcryptjs");
const UsuarioModel = require("../models/UsuarioModel");
const usuarioSchema = require("../models/UsuarioModel");

class UsuarioControllerDB{
    /*static async cadastrar(req,res){
        //const _id = req.body._id;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(req.body.senha, salt);
        const usuario = await UsuarioModel.findOne({email: req.body.email});
        const salvo = req.query.s;
        if(usuario == null){
            if (req.body._id == null){
                const novoUsuario = new usuarioSchema({ // Aula 11/09/23 e Aula 18/09/23
                    email: req.body.email,
                    nome: req.body.nome,
                    senha: hash
                });
                await novoUsuario.save(); //end
            }
            else{
                await UsuarioModel.findOneAndUpdate({_id: req.body._id}, {
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: hash
                });
            }
            res.redirect("/usuarios?s=1");
        }
        else if(usuario != null){
            if (req.body._id != null){
                await UsuarioModel.findOneAndUpdate({_id: req.body._id}, {
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: hash
                });
            }
            else{
                const novoUsuario = new usuarioSchema({ // Aula 11/09/23 e Aula 18/09/23
                    email: req.body.email,
                    nome: req.body.nome,
                    senha: hash
                });
                await novoUsuario.save(); //end
            }
            res.redirect("/usuarios?s=1");
        }
        else{
            res.redirect(`/usuarios/cadastrar?s=1&nome=${req.body.nome}&email=${req.body.email}`);
        }
        
    }*/

    static async cadastrar(req,res){
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(req.body.senha, salt);
        const usuario = await UsuarioModel.findOne({email: req.body.email});
        //const _id = req.body._id;
        if (req.body._id == ""){
            if(usuario == null){
                const novoUsuario = new UsuarioModel({
                    email: req.body.email,
                    nome: req.body.nome,
                    senha: hash
                });
                await novoUsuario.save();
                res.redirect("/usuarios?s=1");
            }
            else{
                res.redirect(`/usuarios/cadastrar?s=1&nome=${req.body.nome}&email=${req.body.email}`);
            }
        }else {
            const usuarioAtual = await UsuarioModel.findOne({_id: req.body._id});
            const usuarioNovo = await UsuarioModel.findOne({email: req.body.email});
            if(usuario == null || usuarioAtual.email == req.body.email){
                if (req.body._id == ""){
                    const usuario = await UsuarioModel.findOne({email: req.body.email})
                    if(usuario == null){
                        const novoUsuario = new usuarioSchema({ // Aula 11/09/23 e Aula 18/09/23
                            email: req.body.email,
                            nome: req.body.nome,
                            senha: hash
                        });
                    }
                    await novoUsuario.save(); //end
                }
                else{
                    await UsuarioModel.findOneAndUpdate({_id: req.body._id}, {
                        nome: req.body.nome,
                        email: req.body.email,
                        senha: hash
                    });
                };        
                res.redirect("/usuarios?s=1");
            } else{
                res.redirect(`/usuarios/cadastrar?s=1&nome=${req.body.nome}&email=${req.body.email}`);
            }
        }
    }

    static async cadastrarGet(req,res){
        const salvo = req.query.s;
        const id = req.params._id;
        let usuario = {
            nome: req.query.nome,
            email: req.query.email
        };
        if (id != undefined){
            usuario = await UsuarioModel.findOne({_id: req.params._id});
        }
        res.render("usuario/cadastrar", {usuario, salvo});
    }

    static async remover(req, res){
        await UsuarioModel.findOneAndDelete({_id: req.params._id});
        res.redirect("/usuarios?r=1");
    }

    static loginGet(req, res){
        const salvo = req.query.s;
        res.render("usuario/login", {salvo});
    }
    static async loginPost(req, res){
        const usuario = await UsuarioModel.findOne({email: req.body.email});
        if(usuario != null){
            if(bcryptjs.compareSync(req.body.senha, usuario.senha)){
                req.session.usuario = resultado.email;
                res.redirect("/");
            }else{
                res.redirect("/usuarios/login?s=2");
            }
        }
        else{
            res.redirect("/usuarios/login?s=1");
        }
    }



    static async listarUsuario(req,res){

        const salvo = req.query.s;
        const removido = req.query.r;
        const dbUsuarios = await usuarioSchema.find();
        console.log(dbUsuarios)
        res.render("usuario/relatorio", {dbUsuarios, salvo, removido});
    }   

    static async detalharUsuario(req, res){
        const usuario = await UsuarioModel.findOne({_id: req.params._id})
        res.render("usuario/detalhar", {usuario});
    };
};

module.exports = UsuarioControllerDB;