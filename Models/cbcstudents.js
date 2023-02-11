const mongoose = require('mongoose');

const cbcstudentsSchema = new mongoose.Schema({
 branchname:{
    required:true,
    type:String,
 },
 Class:{
    required:true,
    type:String,
 },
 Student:{
    required:true,
    type:String,
 },
});

module.exports= mongoose.model('cbcstudents',cbcstudentsSchema);