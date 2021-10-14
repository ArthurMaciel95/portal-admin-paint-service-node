const { sendError, value } = require("../../functions");
const { Product } = require("../../models");

module.exports = async (req, res) => {
    try {
        /**
         * Faz a busca no banco de todos os Produtos sem Query.
         *
         */
        const product = await Product.find();

        /**
         * Valida se existe algum produto registrado.
         * Retorna para a requisição.
         *
         */
        if (value.isNull(product))
            throw { message: "No Product found in the database" };

        res.status(200).json({
            status: true,
            product,
        });
    } catch (erro) {
        sendError(res, erro);
    }
};
