const express=require("express");

const app=express();


app.get('/',(req,res)=>{
    res.status(200).json({msg:"I am home page"});
})

app.get('/about',(req,res)=>{
    res.status(200).json({msg:"I am about page"});
})

app.get('/contact',(req,res)=>{
    res.status(200).json({email:"support@pwskills.com"});
})

module.exports=app;