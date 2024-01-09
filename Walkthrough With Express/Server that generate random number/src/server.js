const express=require('express');

const app=express();
const PORT=4006;

app.get('/',(req,res)=>{
    res.send("Home page");
})

app.get('/random',(req,res)=>{
    let random=Math.floor(Math.random()*1000);
    console.log(random);
    res.status(200).json({random});
});

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})