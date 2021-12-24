const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: 3307,
    database: 'escritores'
});

module.exports = conexao