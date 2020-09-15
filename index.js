const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const connection = require("./database/database")


const mensagemController = require("./contato/mensagemController");


const Mensagem = require("./contato/Mensagem");

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

app.use("/", mensagemController)

app.get("/", (req,resp) => {
    resp.render("index");
});

app.listen(8080, () => { console.log("app rodando com sucesso")});