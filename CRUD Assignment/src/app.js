const express=require('express');
require('dotenv').config();


// DataBase connection 
const connectToDB=require('../config/db.js');
connectToDB();

// create Express Server and Store in 'app' variable
const app=express();


// Middle ware 
app.use(express.json());


// import router file 
const navigator=require('../router/userRoutes.js')
app.use('/',navigator);

module.exports=app;
