const { Client } = require("../../models");
const { value } = require("client-management-attributes");
const { sendError } = require('../../functions')
module.exports = async (req, res) => {
    try {
        if (!req.query.search) {
            throw { message: 'the field is empty' }
        }
        /**
         * Procura no banco se o nome informado existe.
         * 
         */
        const user = await Client.find({ username: { $regex: new RegExp("^" + req.query.search.toLowerCase(), "i") } })

        /**
         * Verifica se o campo está vazio
         * 
         */
        if (value.isNull(user)) {
            throw { message: 'user not found' }
        }

        res.status(200).json({
            status: true,
            user
        })
    } catch (erro) {
        sendError(res, erro);
    }
}