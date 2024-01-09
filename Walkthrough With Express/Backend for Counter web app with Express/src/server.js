const express=require('express');

const app=express();

const PORT=5004;
const HOSTNAME='localhost';
let counter=1;

app.get('/',(req,res)=>{
    res.status(200).json({counter});
})

app.get('/increment',(req,res)=>{
    counter++
    res.status(200).json({counter})
})

app.get('/decrement',(req,res)=>{
    counter--
    res.status(200).json({counter});
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
})