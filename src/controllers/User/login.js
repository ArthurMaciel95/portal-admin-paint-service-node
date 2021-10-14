const { User } = require('../../models')
const { sendError, value, email, toCompare } = require('../../functions')
const bcryptjs = require('bcryptjs')


module.exports = async (req,res) => {   
    try{

        toCompare.keys(['username','email','password'],req.body,true)

        if(!isNaN(req.body.password)){
            throw { message: 'password need to be string'}
        }
        if(value.isNull(req.body.password)){
            throw { message : 'password cannot be null'}
        }

        if(value.isNull(req.body.email)){
            throw { message: 'email cannot be empty'}
        }

        if(!email.isEmail(req.body.email)){
            throw { message: 'email is not valid'}
        }

        const user = await User.findOne({email:req.body.email})
        console.log(user)
        if(!user){
            throw { message: 'user not found'}
        }
      
        const {password} = user

        const comparePassword = await bcryptjs.compare(req.body.password,password)
        console.log(comparePassword)
        if(!comparePassword)throw {message: 'email or password is not correct'}
         
        /* 
            GERAR JSON WEB TOKEN PARA A SESSÃO
        */
        console.log('logado com succeso')
     
        res.status(200).json({
            status:true,
            message:'logged with success'
        })
    }catch(erro){
        sendError(res, erro);
    }
}