const userModel = require("../models/userModel.model");

exports.register = async (req, res, next) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })

        if (user) return res.status(400).json({message:"user already exists !"})


        const newUser = new userModel(req.body)
        
        const savedUSer = await newUser.save();

        const { password, ...others } = savedUSer._doc;

        res.status(200).json(others)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}


exports.login = async (req, res, next) => {
    try {
        const user = req.body.email ? await userModel.findOne({ email: req.body.email }) : await userModel.findOne({ mobile: req.body.mobile })

        if (!user) return res.status(400).json({message:"user not exist"})


        if (req.body.password !== user.password) return next(createError(403, "wrong credentials"))

        const { password, ...others } = user._doc;

        res.status(200).json(others)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}

exports.getAUser = async (req,res,next) =>{
    try{
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}


