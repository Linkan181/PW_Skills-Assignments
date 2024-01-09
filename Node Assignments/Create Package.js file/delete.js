let fs=require('fs');

fs.unlink('Nodejs_Architecture.txt',function(err){
    if(err){
        console.log("File deletion failed.")
    }
    console.log("File Deleted Successfully.")
})