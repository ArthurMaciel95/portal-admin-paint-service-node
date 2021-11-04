const { User } = require("../../models");
const { value } = require("client-management-attributes")
const { sendError } = require('../../functions');
const { isEmail } = require("client-management-attributes/attributes");



module.exports = async (req, res) => {
    try {
        const { token } = req.params
        /**
         * verifica se o token foi passado no parametro.
         */
        if (!token) {
            throw { message: 'you forget the send the token.' }
        }


        /**
         * decodificando 2 vezes
         *  
         */
        const Base64Decoded = Buffer.from(Buffer.from(token, 'base64').toString('utf-8'), 'base64').toString('utf-8')
        console.log(Base64Decoded)
        const [email] = Base64Decoded.split(':')

        isEmail(email)

        /**
         * encontra o email que está tentando trocar a senha.
         */
        const user = await User.findOne({ email });

        if (value.isNull(user)) throw { message: "email not found" }

        /** 
         * verifica se o token foi gerando no usuário que está tentando trocar a senha. 
         * 
         * */
        if (!user.secret_token || !user.secret_token_time) {
            throw { message: 'secret_token not found in user' }
        }
        /**
         * verifica se o token é igual do parametro e do usuário.
         * 
         */
        if (user.secret_token !== token.substr(0, 108)) {
            throw { message: 'token is not equal' }
        }

        const NOW = new Date()
        const TOKEN_TIME = new Date(user.secret_token_time)
        /**
         * verifica se a data e maior do que a data do token que está no banco de dados.
         * 
         */
        if (NOW > TOKEN_TIME) {
            throw { message: 'token time is expired' }
        }

        res.status(200).json({
            status: true,
            message: 'the token is valid '
        })
    } catch (erro) {
        sendError(res, erro)
    }
};
