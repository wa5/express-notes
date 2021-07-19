//remember to delite .env file for this example

var express=require('express');
var app=express();

require('dotenv').config();//step1

//if no port is set
//const port=process.env.PORT;//step2
app.set('port',process.env.PORT || 3000)
//base route
app.get("/",(req,res)=>{
res.send("hello all")
});


app.listen(app.get('port'),()=>{
    console.log(app.get('port'))
})
