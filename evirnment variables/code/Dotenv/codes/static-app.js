var express=require('express');
var app=express();

require('dotenv').config();//step1
const port=process.env.PORT;//step2

//base route
app.get("/",(req,res)=>{
res.send("hello all")
});


app.listen(8001,()=>{
    console.log(port)
})
