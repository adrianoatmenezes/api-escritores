class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarTabela();
  }

  criarTabela() {
    const sql = `
        CREATE TABLE IF NOT EXISTS Escritores(
            id int not null auto_increment primary key,
            titulo varchar(50),
            autor varchar(250),
            texto text,
            tipo varchar(50),
            dataPostado varchar(10)
            )`;

    this.conexao.query(sql, (err) => {
      if (err) {
        console.log(err.sqlMessage);
      }
    });
  }
}

module.exports = new Tabelas();
