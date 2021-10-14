const { User } = require('../../models')
const { sendError, value, email, toCompare } = require('../../functions')
const bcryptjs = require('bcryptjs')


module.exports = async (req,res) => {   
    try{

        toCompare.keys(['username','email','password'],req.body,true)
        /**
         * verifica se o password é uma string
         * 
         */
        if(!isNaN(req.body.password)){
            throw { message: 'password need to be string'}
        }

        /**
         * verifica se o password é um campo vazio
         * 
         */
        if(value.isNull(req.body.password)){
            throw { message : 'password cannot be null'}
        }

        /**
         * verifica se o email está vazio
         * 
         */
        if(value.isNull(req.body.email)){
            throw { message: 'email cannot be empty'}
        }   

        /**
         * verifica se o email é valido
         * 
         */
        if(!email.isEmail(req.body.email)){
            throw { message: 'email is not valid'}
        }

        /**
         * procura no banco se tem alguem com esté email
         * 
         */
        const user = await User.findOne({email:req.body.email})
        console.log(user)

        /**
         * verifica se encontrou o usuário
         * 
         */
        if(!user){
            throw { message: 'user not found'}
        }
      
        const {password} = user

        /**
         * compara a senha enviada com a senha do banco 
         * 
         */
        const comparePassword = await bcryptjs.compare(req.body.password,password)
        
        if(!comparePassword)throw {message: 'email or password is not correct'}
         
        /* 
            GERAR JSON WEB TOKEN PARA A SESSÃO
        */

        res.status(200).json({
            status:true,
            message:'logged with success'
        })
    }catch(erro){
        sendError(res, erro);
    }
}