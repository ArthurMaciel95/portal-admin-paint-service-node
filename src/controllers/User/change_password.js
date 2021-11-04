const { User } = require("../../models");
const { value } = require("client-management-attributes")
const { sendError } = require('../../functions');
const bcryptjs = require('bcryptjs')

module.exports = async (req, res) => {
    try {

        const { password, repeat_password, email } = req.body;
        /**
         * verifica se a senha foi enviada no corpo da requisição
         * 
         */
        if (!password) {
            throw { message: 'you forget the send the password.' }
        }
        /**
         * verifica se a senha é igual a senha de confirmação.
         * 
         */

        if (password !== repeat_password) {
            throw { message: 'the password need to be equal.' }
        }

        /**
         * gera uma nova senha encriptada com hash
         * 
         */
        const salt = await bcryptjs.genSalt();
        const crypPass = await bcryptjs.hash(req.body.password, salt);

        /**
         * Atualiza a nova senha baseado no email enviado.
         * 
         */
        const user = await User.updateOne({ email }, {
            password: crypPass,
            password_hash: salt
        });
        /**
         * verifica se o usuário existe no banco de dados.
         * 
         */
        if (!user) {
            throw { message: 'user not found' }
        }

        res.status(200).json({
            status: true,
            message: 'password updated'
        })
    } catch (erro) {
        sendError(res, erro)
    }
};
