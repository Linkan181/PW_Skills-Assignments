let fs=require('fs');


let append_data="Advantages of Node.js : 1. First of all, Node.js is a lightweight runtime. 2. It uses an asynchronous, event-driven I/O model which ensures that almost no function in Node.js directly performs I/O. 3. Node.js uses JavaScript on both the server and client sides, allowing developers to use the same language for both server-side and client-side scripting. 4. Node.js is designed to be asynchronous and non-blocking. It uses an event-driven, single-threaded model that allows handling a large number of concurrent connections without the need for multi-threading. 5. Node.js is built on the V8 JavaScript runtime, developed by Google for Chrome. V8 compiles JavaScript code into native machine code, resulting in fast execution. 6. Node.js is designed to be scalable, allowing developers to scale horizontally by adding more nodes to the existing system. It's well-suited for building scalable network applications and handling a large number of simultaneous connections. 7. Node.js has a large and active community of developers. 8. It is a cross-platform."
fs.appendFile('Nodejs_Architecture.txt',append_data,function(err){
  if(err){
    console.log("Append fail.",err);
  }

  console.log("append successful.")
  fs.readFile('Nodejs_Architecture.txt',function(error,data){
    if(error){
        console.log("File reading fail.")
    }
    console.log("Read File successfully.");
    console.log("Data: ",data.toString());
  })
})

