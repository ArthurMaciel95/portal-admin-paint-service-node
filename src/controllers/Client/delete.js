const { Client } = require("../../models");
const { value } = require("client-management-attributes")
const { sendError } = require('../../functions')

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw { message: ' params not found' }
        }
        if (!value.isNull(id)) {
            const client = await Client.deleteOne({ _id: id });
            if (value.isNull(client)) throw { message: "Client not found" }

            res.status(200).json({
                status: true,
                client
            })
        }
    } catch (erro) {
        sendError(res, erro)
    }
};
