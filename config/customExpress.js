const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = () => {
  const app = express();

  const corsOptions = {
    exposedHeaders: ["x-access-token"],
  };

  app.use(cors(corsOptions));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  consign().include("controle").into(app); //aqui estamos enviando para o controller o app
  return app;
};
