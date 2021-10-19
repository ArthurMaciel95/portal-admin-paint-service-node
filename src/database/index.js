const dotenv = require('dotenv')
const mongoose = require("mongoose");
dotenv.config()
/**
 * Faz a coneção com o banco de dados.
 * Utiliza do framework mongoose para realizar tal ação.
 *
 */
module.exports = mongoose.connect(
    process.env.DB_URL.replace("<username>", process.env.DB_USER)
        .replace("<password>", process.env.DB_PASS)
        .replace("<database>", process.env.DB_COLLETION),
    {
        useNewUrlParser: true,
    }
);