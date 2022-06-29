const mongoose = require("mongoose")
const collegeModel = require("./collegeModel")
const ObjectId = mongoose.Schema.Types.ObjectId


const internSchema = new mongoose.Schema({
    name:{
        required:true
    },
    email:{
        required:true,
        unique:true
    },
    mobile:{
        required:true,
        unique:true
    },
    collegeId:{
        type : ObjectId,
        ref:'College',
       
    },
    isDeleted:{ type:Boolean , default:false }
},{timestamps:true})


module.exports = mongoose.model('Intern',internSchema)