const express=require('express');

const router=express.Router();

// import controllers file 
const {home,register,login}=require('../controllers/userController.js');
router.get('/',home)
router.post('/register',register);
router.post('/login',login);


module.exports=router;