const { sendError } = require("../../functions");
const { Product } = require("../../models");

module.exports = (req, res) => {
    try {
        res.send("List All");
    } catch (erro) {
        sendError(res, erro);
    }
};
