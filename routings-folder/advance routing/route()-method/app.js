var express = require('express');
var app = express();

require('dotenv').config();//step1

//if no port is set
//const port=process.env.PORT;//step2
app.set('port', process.env.PORT || 3000)

//base route with route methode
app.route('/')
.get( (req, res) => {
    res.send("hello all")
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


//about page
app.route('/things/cars')
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


app.listen(app.get('port'), () => {
    console.log(app.get('port'))
})
