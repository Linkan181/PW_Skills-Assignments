// Require User Schema 
const User=require('../Model/schema.js')

// Home page 
exports.home=async (req,res)=>{
    res.send("this is home page");
}


// Registration Function 
exports.register= async (req,res)=>{

    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            throw new Error("All input field are required!");
        }
        const existingUser= await User.findOne({email});
        const existingUser2= await User.findOne({name});
        if(existingUser){
            throw new Error("User with email id already exist");
        }
        if(existingUser2){
            throw new Error("User with this user-name already exist");
        }

        const user=await User.create({
            name,
            email,
            password
        })

        res.status(200).json({
            success:true,
            msg:"User Registration successful.",
            user
        })
        
    } catch (error) {
        console.log(error)
        res.status(201).json({
           success:false,
           msg:"Regitration failed!"
        })
    }

    
}


// login function 
exports.login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const emailValidation=await User.findOne({email});
        const passwordValidation=await User.findOne({password});
        if(emailValidation && passwordValidation){
            res.status(200).json({
                success:true,
                msg:"User login successfully."
            })
        }
        else{
            throw new Error("User Not Exist!");
        }
    } catch (error) {
        console.log(error);
        res.status(201).json({
            success:false,
            msg:"User login failed."
        })
    }
}

