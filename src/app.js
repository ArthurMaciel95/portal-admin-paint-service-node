require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const rotas = require("./routes");

/**
 * Faz a coneção com o banco de dados.
 * Utiliza do framework mongoose para realizar tal ação.
 *
 */
mongoose.connect(
    process.env.DB_URL.replace("<username>", process.env.DB_USER)
        .replace("<password>", process.env.DB_PASS)
        .replace("<database>", process.env.DB_COLLETION),
    {
        useNewUrlParser: true,
    }
);

/**
 *  Define a acessibilidade da aplição.
 *  %%%%%%%% ATENÇÃO %%%%%%%%
 *  %     Acesso : Any      %
 *  %%%%%%%%%%%%%%%%%%%%%%%%%
 *
 */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Define as rotas para toda a aplicação
 * Rotas raiz (root)
 *
 */
app.use("/client", rotas.Client);
app.use("/product", rotas.Product);

module.exports = app;
