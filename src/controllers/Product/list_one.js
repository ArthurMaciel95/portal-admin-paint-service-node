const { sendError, value } = require("../../functions");
const { Product } = require("../../models");

module.exports = async  (req, res) => {
    try {   
        const { id } = req.params;

        if(value.isNull(id)){
            throw { message: "params not declare" }
           
        }
      
        const product = await Product.findById({ _id: id})
       
        if(value.isNull(product)){
            throw { message: "product not found"}
        }
    } catch (erro) {
        sendError(res, erro);
    }
};
