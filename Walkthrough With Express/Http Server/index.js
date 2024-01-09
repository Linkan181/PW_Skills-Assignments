const http=require('http');

const PORT=4050;
const HOSTNAME='localhost';

const server=http.createServer((req,res)=>{
       if(req.url=='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end("Welcome to Men & Women Dummy Data");
       }else if(req.url=='/men'){
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({
            men:[
                {
                    "id":"1",
                    "name":"Watch",
                    "brand":"ABC",
                    "price":555.00,
                    "color":"blue",
                    "size":"M",
                    "category":"fashion"
                },
                {
                    "id":"2",
                    "name":"Men's T-shirt",
                    "brand":"ABC",
                    "price":505.00,
                    "color":"blue",
                    "size":"M",
                    "category":"fashion"
                },  {
                    "id":"3",
                    "name":"Men's Watch",
                    "brand":"ABC",
                    "price":595.00,
                    "color":"white",
                    
                    "category":"fashion"
                },  {
                    "id":"4",
                    "name":"Men's pant",
                    "brand":"ABC",
                    "price":355.00,
                    "color":"blue",
                    "size":"M",
                    "category":"fashion"
                },  {
                    "id":"5",
                    "name":"Men's goggles",
                    "brand":"ABC",
                    "price":255.00,
                    "color":"blue",
                    "size":"M",
                    "category":"fashion"
                },
                
            ]
        }))
       }
       else if(req.url=='/women'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        const womenData={
            women:[
                {
                    "id":"6",
                    "name":"women's goggles",
                    "brand":"ABC",
                    "price":255.00,
                    "color":"blue",
                    "size":"M",
                    "category":"fashion"
                },
                {
                    "id":"7",
                    "name":"women's watch",
                    "brand":"ABC",
                    "price":255.00,
                    "color":"blue",
                    "size":"M",
                    "category":"fashion"
                },
                {
                    "id":"8",
                    "name":"women's bag",
                    "brand":"ABC",
                    "price":455.00,
                    "color":"Pink",
                    
                    "category":"fashion"
                },
                {
                    "id":"9",
                    "name":"women's Phone cover",
                    "brand":"ABC",
                    "price":155.00,
                    "color":"blue",
                    "size":"free",
                    "category":"fashion"
                },
                {
                    "id":"10",
                    "name":"women's goggles",
                    "brand":"ABC",
                    "price":755.00,
                    "color":"blue",
                    "size":"free",
                    "category":"fashion"
                },
            ]
        }
        res.end(JSON.stringify(womenData));
       }
       else{
        res.statusCode=500;
        res.setHeader('Content-Type','text/plain');
        res.end('Page not found!');
       }
})

server.listen(PORT,()=>{
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
})