const fs=require('fs');


//Read the 'Nodejs_Architecture.txt' file
fs.readFile('Nodejs_Architecture.txt',function(err,data){
    if(err){
        console.log("Error in file reading.",err);
    }
    console.log("Data:",data.toString());
})