const { value } = require("client-management-attributes");
const {sendError} = require("../../functions")
const { Client } = require("../../models");

module.exports = async (req, res) => {
    try {
        /**
         * Faz a busca na colletion Client.
         * Lista todos os clientes
         *
         */
        let clients = await Client.find();

        /**
         * Verifica se o retorno é nulo.
         * Se for, joga um exception na pilha.
         *
         */
        if (value.isNull(clients))
            throw { message: "No Customers found in the database" };

        /**
         * Retorna para a requisição o resultado.
         * Em formato JSON e com status true.
         *
         */
        res.status(200).json({
            status : true,
            clients
        });
    } catch (erro) {
        sendError(res, erro);
    }
};
