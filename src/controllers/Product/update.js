const { sendError,value } = require("../../functions");
const { Product } = require("../../models");

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        //nao esta funcionando 
        if(value.isNull(id)){
            throw{ message: "params not declare" }
        }

        const product = await Product.findByIdAndUpdate({_id:id}, req.body)

        if(value.isNull(product)){
            throw { message: "product not found"}
        }

    } catch (erro) {
        sendError(res, erro);
    }
};
