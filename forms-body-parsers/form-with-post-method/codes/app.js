const express = require('express');
const app = express();
const path=require("path")
require('dotenv').config();
app.set('port', process.env.PORT || 3000)

const ejs=require("ejs");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

const expresslayouts=require("express-ejs-layouts")
app.use(expresslayouts);



var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app
    .route('/')
    .get((req, res) => {

        //for get method only
        console.log(req.query)
        res.render("index")

    })
    .post((req, res) => {
        //for post it will not work
        console.log(req.body) 
        res.render("index")

    });


    app.get('/home',(req, res) => {
        res.render("Home",{foo:'im data'})
    });

    app.get('/login',(req, res) => {
        res.render("login")
    });
    app.route('/handleform')
    .get((req, res) => {

        res.render("registeration")
    });








    



app.get('*', (req, res) => {
    var resObj = {
        statusCode: 404,
        statusMessage: "url not found"
    }
    res.send(resObj)
})


app.listen(app.get('port'), () => {
    console.log(app.get('port'))
})
