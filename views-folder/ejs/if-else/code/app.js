const express = require('express');
const app = express();
const path=require("path")
require('dotenv').config();
app.set('port', process.env.PORT || 3000)

const ejs=require("ejs");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))




app
    .route('/')
    .get((req, res) => {
        res.render("index")
    });


    app.get('/home',(req, res) => {
        res.render("Home",{foo:'im data'})
    });


    app.get('/home/:data',(req, res) => {

        res.render("Home",{
            foo:'im data',
            da:req.params.data,
        arraydata:[
            {chocalate:'dirymilk'},
            {chocalate:'5 star'},
            {chocalate:'dark chocalate'}
        ]
        } )
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
