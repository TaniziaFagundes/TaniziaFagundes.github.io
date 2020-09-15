const Sequelize = require("sequelize");
const connection = require("../database/database");


const Mensagem = connection.define('mensagens',{
    nome:{
        type: Sequelize.STRING, allowNull: false
    },
    email:{
        type: Sequelize.TEXT, allowNull: false
    },
    telefone:{
        type: Sequelize.TEXT, allowNull: false
    },
    mensagem:{
        type: Sequelize.TEXT, allowNull: false
    }
});

Mensagem.sync({force: false}).then(()=>{});

module.exports = Mensagem;