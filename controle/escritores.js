const Escritores = require("../modelo/escritores");

module.exports = (app) => {
  //aqui estamos importando o app
  app.get("/escritores", (req, res) => {
    Escritores.listagem(res);
  });

  app.post("/escritores", (req, res) => {
    const escritores = req.body;
    Escritores.adiciona(escritores, res);
  });
};
