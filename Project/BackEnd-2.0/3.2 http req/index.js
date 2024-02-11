import express from "express";
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send("<h1>hellow world</h1>");
    console.log(req.rawHeaders);
});
app.get('/about',(req,res)=>{
    res.send("<h1>About me </h1>");
    console.log(req.rawHeaders);
});app.get('/contact',(req,res)=>{
    res.send("<h1>Contact me </h1>");
    console.log(req.rawHeaders);
});


app.listen(port,()=>{
    console.log(`server startrd on port ${port}`);
});
