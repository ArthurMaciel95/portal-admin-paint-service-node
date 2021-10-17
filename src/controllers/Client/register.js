const { value, attributes, toCompare } = require("client-management-attributes");
const { sendError } = require("../../functions")
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
            [
                "username",
                "email",
                "cpf",
                "payment_method",
                "address",
                "birth_date",
                "company",
            ],
            req.body,
            false // trava de segurança desativado
        );

        toCompare.keys(
            ["cep", "district", "additional_infomation", "city"],
            req.body.address,
            true // trava de segurança ativada
        );
        
        /**
         * Faz a verificação se há algum parametro vazio.
         * 
         */
        value.attributeIsNull(req.body)
        value.attributeIsNull(req.body.address)

        /**
         * Faz a validação da String.
         * Verifica se há algum tipo de caracter especial.
         * 
         */
        value.hasCharSpacial(req.body.username)
        value.hasCharSpacial(req.body.company)
        value.hasCharSpacial(req.body.address.district)
        value.hasCharSpacial(req.body.address.additional_infomation);

        /**
         * Faz uma verificação no formato do email.
         * Se estiver fora do padrão é lançado um erro na pilha.
         *
         */
        attributes.isEmail(req.body.email);

        /**
         * Verifica se há algum email e um CPF já cadastrado.
         * Se tiver retornar um erro. mas se não, cria um novo cliente.
         *
         */
        const foc = await Client.findOne({$or: [{ cpf: req.body.cpf }, { email: req.body.email }]})
        if (!value.isNull(foc)) {
            if (foc.email === req.body.email)
                throw { message: "Email already registered" };
            if (foc.password === req.body.password)
                throw {message:"Registration of a physical person (CPF) already registered"};
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
