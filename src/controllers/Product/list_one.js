const { sendError } = require("../../functions");
const { Product } = require("../../models");

module.exports = (req, res) => {
    try {
        res.send("List One");
    } catch (erro) {
        sendError(res, erro);
    }
};
