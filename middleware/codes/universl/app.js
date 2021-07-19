var express = require('express');
var app = express();
require('dotenv').config();
app.set('port', process.env.PORT || 3000)

//custom middle wear
const checkUrl=(req,res,next)=>{
    console.log("universall on all methods i will be called")
    console.warn("  current root is:",req.originalUrl)
    next()
}
const checkUrl2=(req,res,next)=>{
    console.log("not universall ")
    console.warn("  current root is:",req.originalUrl)
    next()
}

app.use(checkUrl)

app.route('/')
.get( (req, res) => {
    res.send("hello all")
});





//about page it will be called universally on all methods
app.route('/about')
.get( checkUrl2,(req, res) => {
    res.send("hello all about page")
})
.post( (req, res) => {
    res.send("hello all")
})
.put( (req, res) => {
    res.send("hello all")
})
.delete( (req, res) => {
    res.send("hello all")
});



app.get('*',(req,res)=>{
    var resObj={
        statusCode:404,
        statusMessage:"url not found"
    }
    res.send(resObj)
})


app.listen(app.get('port'), () => {
    console.log(app.get('port'))
})
