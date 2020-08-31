const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const connection = require("./database/database")
const Mensagens = require("./database/Mensagem")

connection
    .authenticate()
    .then(()=>{
        console.log("conexão com base de dados realizada com sucesso")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/", (req,resp) => {
    resp.render("index");
});

app.post("/salvarmensagem",(req, resp) => {
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
        resp.redirect("/")
    })
})

app.listen(8080, () => { console.log("app rodando com sucesso")});