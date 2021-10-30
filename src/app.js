require("dotenv").config();
const database = require('./database')
const express = require("express");


const app = express();
const cors = require('cors')
const rotas = require("./routes");
const { jwt } = require("./functions");

database.then(() => {
    console.log('===> BANCO DE DADOS CONECTADO! <===')
}).catch(e => {
    console.log(e)
})

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
app.use(express.json({ limit: '5mb', parameterLimit: 100000, extended: true }));
app.use(express.urlencoded({ extended: true, limit: '5mb', parameterLimit: 100000, }));

/**
 * Define as rotas para toda a aplicação
 * Rotas raiz (root)
 *
 */

app.get('/', (req, res) => {
    res.status(200).json({
        status: true
    })
})

app.use("/client", jwt.verify, rotas.Client);
app.use("/product", jwt.verify, rotas.Product);
app.use("/user", rotas.User);




module.exports = app;
