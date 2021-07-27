const mongoose = require('mongoose');
const assert=require('assert')//assert we can use instead of then and catch or if else

mongoose.connect('mongodb://localhost:27017/test', 
{useNewUrlParser: true, 
    useUnifiedTopology: true},(error,link) =>{
        assert.equal(error,null,'DB connection faild....')
        console.log('db connection success')
        //console.log(link)
    }
    )
