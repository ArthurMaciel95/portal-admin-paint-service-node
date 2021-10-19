const { value, attributes, toCompare } = require("client-management-attributes");
const { sendError } = require("../../functions")
const { Client } = require("../../models");

module.exports = async (req, res) => {
    try {
        /**
         * Faz a validão dos atributos passados pela requisição.
         * Verifica se os atributos estão preencidos conforme esperado.
         *
         */
        toCompare.keys(
            [
                "username",
                "email",
                "cpf",
                "payment_method",
                "address",
                "birth_date",
                "company",
                "status",
            ],
            req.body
        );

        toCompare.keys(
            ["cep", "district", "additional_infomation", "city"],
            req.body.address
        );

        /**
         * Verifica se os atributos passsado não estão vazios
         * 
         */
        value.attributeIsNull(req.body);
        value.attributeIsNull(req.body.address);

        /**
         * Verifica se há algum tipo de caracter especial.
         *
         */
        value.hasCharSpacial(req.body.username);
        value.hasCharSpacial(req.body.company);
        value.hasCharSpacial(req.body.address.district);
        value.hasCharSpacial(req.body.address.additional_infomation);

        /**
         * Verifica se é passado um parametro id.
         * Verifica se o Email passado é um email.
         *
         */
        if (value.isNull(req.params.id))
            throw { message: "params id not declare" };

        attributes.isEmail(req.body.email);

        /**
         * Faz a atualização com base no ID.
         * Se o retorno for vazio, quer dizer que o cliente não foi encontrado
         * Seta a data atual da atualização.
         */

        req.body.updated_at = new Date();
        const client = await Client.findByIdAndUpdate(
            { _id: req.params.id },
            req.body
        );

        if (value.isNull(client)) throw { message: "Client not found" };

        res.status(200).json({
            status: true,
            message: "updated with success!",
        });
    } catch (erro) {
        sendError(res, erro);
    }
};
