const { User } = require("../../models");
const { value } = require("client-management-attributes")
const { sendError } = require('../../functions');
const { isEmail } = require("client-management-attributes/attributes");
const { v4 } = require('uuid');
const nodemailer = require('nodemailer')
require('dotenv').config()
module.exports = async (req, res) => {
    try {
        const { email } = req.body;
        /**
         * verifica se o email foi passado no parametro.
         */
        if (!email) {
            throw { message: 'you forget the send the email.' }
        }

        /**
         * verifica se é um email.
         *
         */
        isEmail(email);

        /**
         * busca no banco de dados o email requisitado.
         */
        const user = await User.findOne({ email });

        /**
         * verifica se o email passado existe na base de dados.
         */
        if (value.isNull(user)) throw { message: "email not found" }



        const TIME_TO_EXPIRE_IN_MINUTES = 20;

        /**
         * Formata o token com email do usuário é um uuid gerado
         */
        const token = `${user.email}:${v4()}`


        /**
         * encripta 2 vezes para base64
         * 
         */
        const base64 = Buffer.from(Buffer.from(token).toString('base64')).toString('base64')

        const date = new Date()
        user.secret_token = base64;
        user.secret_token_time = date.setMinutes(date.getMinutes() + TIME_TO_EXPIRE_IN_MINUTES)

        /**
         * sava as alterações no banco de dados.
         */
        user.save();

        /**
         * link que será enviado para o email.
         * 
         */
        const link = `http://localhost:3001/reset/${base64}`

        /**
         * função para o envio de email.
         * 
         */
        async function sendMail() {
            const transporter = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "ef1f4474909661",
                    pass: "bc109e97f5a2d7"
                }
            })
            await transporter.sendMail({
                from: '<noreply@paint.digital.com>', // sender address
                to: `${email}`, // list of receivers
                subject: "Paint panel - Recuperação de senha.", // Subject line
                text: "recuperação de senha", // plain text body
                html: `<b>clique no link para recuperar:</b><a href="${link}">clique aqui</a><br/> ou tente por este link => <a href="${link}">${link}</a>`, // html body
            });

        }
        /**
         * verifica se havera erro, se tiver, será mostrado no console
         */
        sendMail().catch(console.error);
        res.status(200).json({
            status: true,
            message: 'token generete with success'
        })
    } catch (erro) {
        sendError(res, erro)
    }
};
