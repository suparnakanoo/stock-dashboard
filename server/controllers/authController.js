const User= require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');


const test = (req, res) => {
    res.json('test is working')
}

//Register Endpoint
const registerUser= async (req,res) => {
    try {
        const {name, email, password}=req.body;
        //Check if name is entered
        if(!name){
            return res.json({
                error:'name is required'
            })
        }
        //Check if password is good
        if(!password|| password.length<6){
            return res.json({
                error:'Password is required and should be atleast 6 character long'
            })
        }
        //Check email
        const exist= await User.findOne({email}); //checking if email exists
        if(exist){
            return res.json({
                error:'Email is already taken'
            })
        }else if(!email){
            return res.json({
                error:'Email is required!'
            })
        }

        const hashedPassword= await hashPassword(password)
        //create user in database
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
};

//Login Endpoint
const loginUser= async (req,res) => {
    try {
        //get the requested body
        const {email, password} = req.body;

        //Check if user exist
        const user = await User.findOne({email});
        if(!user){
           return res.json({
            error:'No user found. Please register to continue.'
           }) 
        }

        //Check if password match
        const match = await comparePassword(password,user.password)
        //if the password match , we will assign it a JWT to this user so that we can track them through out the whole application
        if(match){
            jwt.sign({email: user.email,id: user._id, name: user.name}, process.env.JWT_SECRET,{}, (err, token)=>{
                if(err) throw err;
                res.cookie('token',token).json(user)
            })
        }else{
            return res.json({
             error:'Invalid password'
            }) 
         }
    } catch (error) {
        console.log(error)
    }
};

const getProfile = (req,res) => {
    const {token} = req.cookies 
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) =>{
            if(err) throw err;
            res.json(user)
        })
    }
    else{
        res.json(null)
    }

}

module.exports={
    test,
    registerUser,
    loginUser,
    getProfile
};