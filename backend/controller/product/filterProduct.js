const productModel = require("../../models/productModel")

const filterProductController = async(req,res)=>{
 try{
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
            category :  {
                "$in" : categoryList
            }
        })

        res.json({
            data : product,
            message : "product",
            error : false,
            success : true
        })
 }catch(err){
    res.json({
        message : err.message || err,
        error : true,
        success : false
    })
 }
}


module.exports = filterProductController