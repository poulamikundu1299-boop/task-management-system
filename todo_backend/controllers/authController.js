const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const existemail = await User.findOne({email});
        if(existemail){
            return res.status(404).send("Email already exists...");
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            name,
            email,
            password : hashedPassword
        });
        await newUser.save();
        res.status(200).send(newUser);
    }catch(err){
        res.status(500).send(err.message);
    }
}

const logIn = async(req,res)=>{
    try{
        console.log(req.body);
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).send("Worng Email...");
        }
        const checkPassword = await bcrypt.compare(password,user.password);
        if(!checkPassword){
            return res.status(404).send("Worng Password...");
        }
        const token = jwt.sign(
            {
                id : user._id,
                email : user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn : "1d"
            }
        )
        return res.status(200).json({

            message : "Log In successful...",
            token

        });
    }catch(err){
        res.status(500).send(err.message);
    }
}

module.exports = {signUp,logIn};