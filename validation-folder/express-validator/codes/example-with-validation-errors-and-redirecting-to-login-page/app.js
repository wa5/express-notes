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
 
// parse application/json for post method
app.use(bodyParser.json())


//express validators write after the bodyparser
// ...rest of the initial code omitted for simplicity.
const { check, validationResult } = require('express-validator');



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



    app.route('/handleform')
    .get((req, res) => {
        const error=validationResult(req)
        res.render("registeration",{error:''})
    })//forsumbiting form values
    .post([
        check('username','Invalid User Name').isString(),
        check('email','Invalid UserID').isEmail(),
        check('password', 'The password must be 5+ chars long and contain a number')
    .not()
    .isIn(['123', 'password', 'god'])
    .withMessage('Do not use a common word as the password')
    .isLength({ min: 5 })
    .matches(/\d/)
    
    ],(req, res) => {
        const errors=validationResult(req)
        console.log(errors.mapped());
        //if errors are there then come in this if condition
if(!errors.isEmpty()){
    res.render("registeration",{error:errors.mapped()})
}
        
        console.log(req.body) 
        res.render("login",{username:req.body.username,email:req.body.email})
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