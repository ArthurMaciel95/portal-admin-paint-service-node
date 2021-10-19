const { toCompare, value } = require("client-management-attributes");
const { sendError } = require("../../functions");

const { Product } = require("../../models");

module.exports = async (req, res) => {
    try {
        /**
         * Verifica os atributos recebidos.
         * Verifica se há caracteres especiais no nome do produto.
         *
         */
        toCompare.keys(
            ["name", "price", "brand", "manufacturer", "photo"],
            req.body
        );

        /**
         *  Verifica se há caracteres especiais
         *
         */
        value.hasCharSpacial(req.body.name);

        /**
         * Confere a existencia de produto com o mesmo nome.
         *
         */
        if (!value.isNull(await Product.findOne({ name: req.body.name }))) {
            throw { message: "Product already registered" };
        }

        /**
         * Cria o produto e retorna para a requição
         *
         */
        const product = await Product.create(req.body);
        res.status(201).json({
            status: true,
            message: "Product added with success!",
            product: {
                name: product.name,
                _id: product._id,
            },
        });
    } catch (erro) {
        sendError(res, erro);
    }
};
