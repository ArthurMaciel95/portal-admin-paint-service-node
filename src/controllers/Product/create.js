const { sendError,toCompare, value} = require("../../functions");
const { Product } = require("../../models");
module.exports = async (req, res) => {
    try {
        
        toCompare.keys(
            ['name','price','brand','manufacturer'],
            req.body,
            false
        )
        value.hasCharSpacial(req.body.name)

        if(!value.isNull(await Product.findOne({name: req.body.name}))){
            throw { message: "Product already registered"};
        }

        const product = await Product.create(req.body);
        res.status(201).json({
            status:true,
            message:'Product added with success!'
        })

    } catch (erro) {
        sendError(res, erro);
    }
};
