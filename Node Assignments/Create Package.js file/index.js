const fs=require('fs');

let data="Node.js Architecture: Node.js is a runtime environment for javaScript which allow JavaScript to run outside browser. 'Node.js' use the Google Chrome's  v8 engine to execute javaScript code, Libuv library to support asynchronous I/O, and some APIs. Node.js is build by wraping the 'js code' on v8 engine that written in C/C++."

fs.writeFile('Nodejs_Architecture.txt',data,function(err){
    if(err){
        console.log("Write on file failed.",err);
    }
    console.log("Successfully Write on File.")
})