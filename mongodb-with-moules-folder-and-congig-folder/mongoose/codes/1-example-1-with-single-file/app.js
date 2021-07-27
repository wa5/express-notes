
const mongoose = require('mongoose');
//require('./config/db.config');
const assert=require('assert')//assert we can use instead of then and catch or if else

mongoose.connect('mongodb://localhost:27017/test', 
{useNewUrlParser: true, 
    useUnifiedTopology: true},(error,link) =>{
        assert.equal(error,null,'DB connection faild....')
        console.log('db connection success')
        //console.log(link)
    }
    )

const { Schema } = mongoose;

const studentSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  clas: String,
  body:   String
 
});

const Student= mongoose.model('Student', studentSchema);

const anita = new Student({ name: 'anita',clas:"mern" });
 
kitty.save().then(() => console.log('meow'))