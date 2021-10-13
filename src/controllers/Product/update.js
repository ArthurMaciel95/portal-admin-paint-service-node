const { sendError } = require("../../functions");
const { Product } = require("../../models");

module.exports = (req, res) => {
    try {
        res.send("Update");
    } catch (erro) {
        sendError(res, erro);
    }
};
