var express = require('express');
var app = express();

require('dotenv').config();
app.set('port', process.env.PORT || 3000)

const things=require('./router/things')
const contact=require('./router/contact')
const about=require('./router/about')

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


//routes
app.use("/things",things)
app.use("/bingo",things)
app.use("/bingo",about)
app.use("/bingo",contact)


//about page
app.route('/contact/things/cars')
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
