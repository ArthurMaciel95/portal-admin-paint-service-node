const { value } = require("client-management-attributes");
const { sendError } = require("../../functions");

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
         * Faz a busca no banco de dados por ID e atualiza.
         * Valida o retorno e retorna para a requisição.
         *
         */
        req.body.updated_at = new Date();
        const product = await Product.findByIdAndUpdate(
            { _id: req.params.id },
            req.body
        );

        if (value.isNull(product)) throw { message: "product not found" };

        res.status(200).send({
            status: true,
            message: "Updated product",
        });
    } catch (erro) {
        sendError(res, erro);
    }
};
