require('dotenv').config()
const { User } = require("../../models");

const { value, attributes, toCompare } = require("client-management-attributes")
const { sendError, jwt } = require("../../functions");

const bcryptjs = require("bcryptjs");

module.exports = async (req, res) => {
    try {
        /**
         * Faz a validação dos atributos enviados pela requisição.
         *
         */
        toCompare.keys(["username", "email", "password"], req.body, true);

        /**
         * Valida se os atributos então preenchidos corretamente.
         *
         */
        value.attributeIsNull(req.body);

        /**
         * Verifica se o Email tem um formato padrão.
         *
         */
        attributes.isEmail(req.body.email);

        if (!isNaN(req.body.password))
            throw { message: "password need to be string" };

        /**
         * Faz a busca no bando de dados pelo usuario.
         *  Verifica se o usuario existe.
         * 
         */
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw { message: "user not found" };

        /**
         * Faz a comparação entre as senhas passadas.
         *
         */
        if (!(await bcryptjs.compare(req.body.password, user.password)))
            throw { message: "email or password is not correct" };


        /**
         * Retornar para o cliente a mensagem de sucesso.
         * E tambem o token gerado pela API.
         * 
         */
        res.status(200).json({
            status: true,
            message: "logged with success",
            token: jwt.create(user.toJSON() ).toString(),
            info_user : user
        });
    } catch (erro) {
        console.log(erro)
        sendError(res, erro);
    }
};
