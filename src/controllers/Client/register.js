const { value, email, sendError, toCompare } = require("../../functions");
const { Client } = require("../../models");

module.exports = async (req, res) => {
    try {
        /**
         * Verifica se os parametros recebido são os esperados.
         * A trava de segurança por padrão é true, isso é, aceita somente os que são esperados.
         * Contudo, nessa primeira parte a trava é desativa pois podera ser recebida o parametro Photo, company e entre outros.
         *
         */
        toCompare.keys(
            ["username", "email", "cpf", "payment_method", "adress"],
            req.body,
            false // trava de segurança desativado
        );

        toCompare.keys(
            ["cep", "district", "additional_infomation", "city"],
            req.body.adress,
            true // trava de segurança ativada
        );

        /**
         * Faz uma verificação no formato do email.
         * Se estiver fora do padrão é lançado um erro na pilha.
         *
         */
        email.isEmail(req.body.email);

        /**
         * Verifica se há algum email e um CPF já cadastrado.
         * Se tiver retornar um erro. mas se não, cria um novo cliente.
         *
         */
        if (!value.isNull(await Client.findOne({ email: req.body.email }))) {
            throw { message: "Email already registered" };
        }
        if (!value.isNull(await Client.findOne({ cpf: req.body.cpf }))) {
            throw { message: "Your identity is already registered (CPF)" };
        }
        /**
         * Cria um novo usuario com base nas informaçoes passadas.
         * E retornar para a requição as informaçoes.
         *
         */
        const client = await Client.create(req.body);
        res.status(200).json({
            status: true,
            message: "Successful registered customer",
            client: {
                _id: client._id,
                email: client.email,
                name: client.name,
            },
        });
    } catch (erro) {
        sendError(res, erro);
    }
};
