import express from "express";

const app =express();
const port = 8000;

app.get('/',(req,res)=>{
    const today=new Date();
    const day=today.getDay();
    console.log(day)
    res.render("index.ejs",{
        dayType:"A Weekday",
        advice:"It is time to work hard "
    })
})

app.listen(port,()=>{
console.log(`The server is runnning at port ${port}`);
});