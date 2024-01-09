const mongoose=require('mongoose');

const connectToDB= async ()=>{
    mongoose.connect(process.env.URL)
    .then((conn)=>{
        console.log("Database connected successfully.");
    })
    .catch((err)=>{
        console.log(err);
        console.log("Database failed to connect.");
    })
}

module.exports=connectToDB;