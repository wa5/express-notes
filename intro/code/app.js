var express=require('express');
var app=express();

//base route
app.get("/",(req,res)=>{
res.send("hello all")
});


app.listen(8001,()=>{
    console.log("im working")
})
