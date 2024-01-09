const http=require('http');

let server=http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write(' <h1> I Am Happy To Learn Full Stack Web Development From PW Skill ! </h1>')
    }
    res.end();
})

server.listen(5000);

console.log("Server is running on port no. 5000");






  
  
  
  
  
