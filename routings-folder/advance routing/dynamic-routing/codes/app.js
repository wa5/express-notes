var express=require('express');
var app=express();

//base route
app.get("/",(req,res)=>{
res.send("hello all")
});






//case 1 only string
app.get("/about",(req,res)=>{
    res.send("hello all im about")
    });

//case 2 only string
app.get("/hom?e",(req,res)=>{//case 2 0 or more charecters of m home or hoe or hommmmme
    res.send("hello all im case2")
    });

    //case 8 only params
app.get("/cars/:carid",(req,res)=>{
    res.send("hello all params example "+req.params.carid)
    });








app.listen(8001,()=>{
    console.log("im working")
})
