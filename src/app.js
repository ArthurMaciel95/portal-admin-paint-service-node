require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require('cors')
const rotas = require("./routes");
const { jwt } = require("./functions");

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
    res.header("Access-Control-Allow-Origin", ["*"]);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
// adicionei cors por que no front so funciona assim, depois resolvo o problema e tiro.
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Define as rotas para toda a aplicação
 * Rotas raiz (root)
 *
 */
app.use("/client", jwt.verify, rotas.Client);
app.use("/product", jwt.verify, rotas.Product);
app.use("/user", rotas.User);




module.exports = app;
