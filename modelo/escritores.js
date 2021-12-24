const conexao = require("../bd/conexao");

class Escritor {
  adiciona(escritor, res) {
    const comandoSql = `insert into Escritores set ?`;
    conexao.query(comandoSql, escritor, (err, resultado) => {
      if (err) {
        res.status(400).json(err.sqlMessage);
      } else {
        res.status(201).json(escritor);
      }
    });
  }

  listagem(res) {
    const comandoSql = `select * from Escritores`;
    conexao.query(comandoSql, (err, resultado) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
}

module.exports = new Escritor();
