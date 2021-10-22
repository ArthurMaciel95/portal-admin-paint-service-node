require('dotenv').config()
const { User } = require("../../models");

const { value, attributes, toCompare } = require("client-management-attributes")
const { sendError, jwt } = require("../../functions");

const bcryptjs = require("bcryptjs");

module.exports = async (req, res) => {
    try {

        /**
         * Verifica se a requisição tem token
         * 
         */
        jwt.getToken(req)

        /**
         * Pega somente o token Basic.
         * @returns { string }
         */
        const token = req.headers['authorization'].replace('Basic ', '').trim()

        /**
         * transforma base64 para utf8.
         * 
         */
        const decoded = new Buffer.from(token, 'base64').toString('utf8');

        /**
         * Separa a senha do email.
         * 
         */
        const [email, password] = decoded.split(':')

        /**
         * Valida se os atributos então preenchidos corretamente.
         *
         */
        if (value.isNull(email) || value.isNull(password))
            throw { message: 'email or password cannot be null' }

        /**
         * Verifica se o Email tem um formato padrão.
         *
         */
        attributes.isEmail(email);

        /**
         * Transforma a senha em String
         * 
         */
        if (!isNaN(password))
            password.toString()

        /**
         * Faz a busca no bando de dados pelo usuario.
         *  Verifica se o usuario existe.
         * 
         */
        const user = await User.findOne({ email });
        if (!user) throw { message: "user not found" };

        /**
         * Faz a comparação entre as senhas passadas.
         *
         */
        if (!(await bcryptjs.compare(password, user.password)))
            throw { message: "email or password is not correct" };

        /**
         * removendo senha e hash do usuário
         * 
         */
        const data = user.toObject()
        delete data['password']
        delete data['password_hash']

        /**
         * Retornar para o cliente a mensagem de sucesso.
         * E tambem o token gerado pela API.
         * 
         */
        res.status(200).json({
            status: true,
            token: jwt.create(data).toString(),
        });
    } catch (erro) {
        console.log(erro)
        sendError(res, erro);
    }
};