const Sequelize = require("sequelize")

//criando base de dados
const connection = new Sequelize('Fotografia', 'root', '123456',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;