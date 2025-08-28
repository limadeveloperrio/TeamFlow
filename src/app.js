const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes");

const app = express();

// Middlewares globais
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Exemplo de rota
app.get("/", (req, res) => {
  res.send("API TeamFlow funcionando 🚀");
});

// Rotas principais
app.use("/api", routes);

module.exports = app;
