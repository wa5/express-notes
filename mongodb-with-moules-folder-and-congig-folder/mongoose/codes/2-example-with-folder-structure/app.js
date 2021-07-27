
const mongoose = require('mongoose');
require('./config/db.config');//its for db connections
const {studentSchema} =require('./src/models') //its schema from model folder

//creating collection of student with schema
const Student= mongoose.model('Student', studentSchema);

//passing data into the collection
const anita = new Student({ name: 'anita',clas:"mern" });

//commiting data to the collections
anita.save().then(() => console.log('meow'))
//reading all data from the collection in student
Student.find((err,resp)=>{
    if(err){
        console.log(err)
    }else{
        console.log(resp)
    }
})
//reading one data from the collection in student
Student.findOne({name:'anita'},(err,resp)=>{
    if(err){
        console.log(err)
    }else{
        console.log(resp)
    }
})
//reading one data from the collection in student and updatting
Student.findOneAndUpdate({name:'anita'},
{name:'updated-name'},
{overwrite:false,new:true},//overite given not to create new obj new will give recently updated fields
(err,resp)=>{
    if(err){
        console.log(err)
    }else{
        console.log("updated--",resp)
    }
})
Student.findOneAndDelete({name:'anita'},(err,resp)=>{
    if(err){
        console.log("im delting---",err)
    }else{
        console.log("im delting---",resp)
    }
})

