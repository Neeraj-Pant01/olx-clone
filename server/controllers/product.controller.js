const productModel = require("../models/product.model")

exports.addProduct = async (req,res,next) =>{
    const newProduct = new productModel(req.body)
    try{
        const product = await newProduct.save();
        res.status(200).json(product)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.getAproduct = async (req,res,next) =>{
    try{
        const product = await productModel.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.getAllProducts = async (req,res,next) =>{
    const q = req.query;
        const filters = {
            ...(q.search && {productName: {$regex: q.search, $options:"i"}})
        }
            try{
                const products = q.latest ? await productModel.find().limit(9).sort({createdAt : -1}) : await productModel.find(filters).sort({[q.sort]: -1})
                res.status(200).json(products)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.getSellerProducts = async (req,res,next) =>{
    try{
        const products = await productModel.find({userId:req.params.userId})
        res.status(200).json(products)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

