const {sendError , value, toCompare} = require("../../functions")
const { Client } = require("../../models");

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        //nao está funcionando
        if(!value.isNull(id)){
            throw{ message: "params not declare" }
        }

        const client = await Client.findByIdAndUpdate({_id:id}, req.body)

        if(value.isNull(client)){
            throw { message: "product not found"}
        }

        res.status(200).json({
            message:"updated with success!"
        })

    } catch (erro) {
        sendError(res, erro)
    }
}