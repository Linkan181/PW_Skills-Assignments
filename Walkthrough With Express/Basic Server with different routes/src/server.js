const app=require('./app.js');
const PORT=4001;


app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})