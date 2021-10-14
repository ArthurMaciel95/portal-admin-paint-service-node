const { User } = require('../../models')
const { sendError, value, email, toCompare } = require('../../functions')
const bcryptjs = require('bcryptjs')


module.exports = async (req,res) => {   
    try{

        toCompare.keys(['username','email','password'],req.body,true)

        const emailBody = req.body.email
        const {password} = req.body

        if(!isNaN(password)){
            throw { message: 'password need to be string'}
        }
        if(value.isNull(password)){
            throw { message : 'password cannot be null'}
        }

        if(value.isNull(emailBody)){
            throw { message: 'email cannot be empty'}
        }

        if(!email.isEmail(emailBody)){
            throw { message: 'email is not valid'}
        }

        if(await User.findOne({email:emailBody})){
            throw { message: 'email already exist'}
        }

        const salt = await bcryptjs.genSalt()
        const passwordCrypt = await bcryptjs.hash(password,salt,)

        req.body.password = passwordCrypt
        req.body.password_hash = salt
        console.log(req.body)
        const user = await User.create(req.body)
        res.status(201).json({
            status:true,
            user
        })
    }catch(erro){
        sendError(res, erro);
    }
}