var express = require('express');
var app = express();

require('dotenv').config();//step1

//if no port is set
//const port=process.env.PORT;//step2
app.set('port', process.env.PORT || 3000)

//base route
app.get("/", (req, res) => {
    res.send("hello all")
});
app.post("/", (req, res) => {
    res.send("hello all")
});
app.put("/", (req, res) => {
    res.send("hello all")
});
app.delete("/", (req, res) => {
    res.send("hello all")
});




//about page
app.get("/about", (req, res) => {
    res.send("hello all")
});
app.post("/about", (req, res) => {
    res.send("hello all")
});
app.put("/about", (req, res) => {
    res.send("hello all")
});
app.delete("/about", (req, res) => {
    res.send("hello all")
});


//home page
app.get("/home", (req, res) => {
    res.send("hello all")
});
app.post("/home", (req, res) => {
    res.send("hello all")
});
app.put("/home", (req, res) => {
    res.send("hello all")
});
app.delete("/home", (req, res) => {
    res.send("hello all")
});








app.listen(app.get('port'), () => {
    console.log(app.get('port'))
})
