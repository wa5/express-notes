const mongoose=require ('mongoose');
  const { Schema } = mongoose;

  const studentSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    clas: String,
    body:   String
   
  });
module.exports=studentSchema;