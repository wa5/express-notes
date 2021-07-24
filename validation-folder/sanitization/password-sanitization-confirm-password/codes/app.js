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


  //this is with matcheddata for retaining data in inputbox
  //matchedata is variable given by me
const { matchedData, sanitizeBody } = require('express-validator');


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
    .matches(/\d/),
    //code for checking confirm password
    check('Confirmpassword').custom((value, { req })=>{
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
          }
      
          // Indicates the success of this synchronous custom validator
          return true;
    })
    ],(req, res) => {
        const errors=validationResult(req)
        console.log(errors.mapped());
        //if errors are there then come in this if condition
if(!errors.isEmpty()){
    const details=matchedData(req)
    res.render("registeration",{error:errors.mapped(),details:details})
}else{

    //this is with matcheddata for retaining data in inputbox
  
    const details=matchedData(req)
    console.log(details) 
    res.render("login",{details:details})
}
        
      
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