const express = require("express");
const router = express.Router();
const Mensagens = require("./Mensagem");


router.get("/contato/index", (req, res) => {
    res.render("contato/index");
})


router.post("/salvarmensagem",(req, resp) => {
    var nome = req.body.nome;
    var email = req.body.email;
    var telefone = req.body.telefone;
    var mensagem = req.body.mensagem;

    Mensagens.create({
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    }).then(() => {
        resp.redirect("/");
    }).catch(() => {
        resp.redirect("contato/index");
    })
})

module.exports = router;