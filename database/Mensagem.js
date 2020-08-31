const Sequelize = require("sequelize");
const connection = require("./database");

const Mensagem = connection.define('mensagem',{
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