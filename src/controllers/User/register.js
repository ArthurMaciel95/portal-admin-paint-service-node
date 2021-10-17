const { User } = require("../../models");

const { value, attributes, toCompare } = require("client-management-attributes")
const { sendError } = require("../../functions");

const bcryptjs = require("bcryptjs");

module.exports = async (req, res) => {
    try {

        /**
         * Faz a comparação com o que é necessario com os que estão sendo enviados.
         * Verifica se os atributos então preencidos e não nulos.
         * 
         */
        toCompare.keys(["username", "email", "password"], req.body);
        value.attributeIsNull(req.body);

        /**
         * Verifica o formato do Email.
         * Busca por um usuario Já cadastrado no sistema.
         * 
         */
        if (!attributes.isEmail(req.body.email))
            throw { message: "email is not valid" };
        if (await User.findOne({ email: req.body.email }))
            throw { message: "email already exist" };

        /**
         *  Gera o mecanismo para encriptção.
         *  Criptografa a senha e cria um atributo de retorno.
         * 
         */
        const salt = await bcryptjs.genSalt();
        req.body.password = await bcryptjs.hash(req.body.password, salt);
        req.body.password_hash = salt;

        /**
         * Cria um novo Usuário.
         * E retorna os dados para a requisição.
         * 
         */
        const user = await User.create(req.body);


        res.status(200).json({
            status: true,
            user,
        });
        
    } catch (erro) {
        sendError(res, erro);
    }
};
