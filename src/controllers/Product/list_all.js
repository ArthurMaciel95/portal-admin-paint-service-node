const { sendError,value } = require("../../functions");
const { Product } = require("../../models");

module.exports = async (req, res) => {
    try {
        const product = await Product.find()


        if (value.isNull(product))
        throw { message: "No Product found in the database" };
        
        res.status(200).json({
            status:true,
            product
        })
    } catch (erro) {
        sendError(res, erro);
    }
};
