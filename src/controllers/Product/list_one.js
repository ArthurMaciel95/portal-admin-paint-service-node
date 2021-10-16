const { value } = require("client-management-attributes");
const { sendError} = require("../../functions");
const { Product } = require("../../models");

module.exports = async (req, res) => {
    try {
        /**
         * Verifica se o parametro id esta sendo recebido.
         *
         */
        if (!req.params.id)
            throw { message: "It is necessary to inform the product code" };

        /**
         * Faz a busca no banco de dados por ID.
         * Valida o retorno e retorna para a requisição.
         *
         */
        const product = await Product.findById({ _id: req.params.id });

        if (value.isNull(product)) {
            throw { message: "product not found" };
        }

        res.status(200).json({
            status: true,
            product,
        });
    } catch (erro) {
        sendError(res, erro);
    }
};
