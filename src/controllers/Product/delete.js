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
         * Deleta o produto no banco de dados e retorna a quantidade de deletados.
         *
         */
        let response = await Product.deleteOne({ _id: req.params.id });

        /**
         * Faz a confirmação da exclusão e retorna a mensagem para a requisição.
         *
         */
        if (response.deletedCount < 1)
            throw { message: "Product cannot be found" };

        res.status(200).json({
            status: true,
            message: "Product deleted.",
        });
    } catch (erro) {
        sendError(res, erro);
    }
};
