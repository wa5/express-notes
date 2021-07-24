var express = require('express');
var app = express();

require('dotenv').config();
app.set('port', process.env.PORT || 3000)



app.route('/')
.get( (req, res) => {
    res.send("hello all")
});





//about page
app.route('/about')
.get( (req, res) => {
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
