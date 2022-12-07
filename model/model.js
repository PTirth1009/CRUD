const mongoode = require("mongoose");
const validator = require("validator");


const studentSchema = new mongoode.Schema({
    name:{
        type: String,
        require: true,
        minLength: 4
    },
    email:{
        type: String,
        require:true,
        unique:[true , "email id already exist"],
        validate(value){
             if(!validator.isEmail(value)){
                 throw new Error("Invalid Email");
             }
        }
    },
    phonenumber:{
        type: Number,
        require: true,
        unique:[true , "Number is Already Exist"],
        maxLength:10
    },
    enrollNumber:{
        type: Number,
        require: true,   
        maxlength:12
    },
    city: {
        type: String,
        required: true
    }
});


const Student = new mongoode.model("Student" ,studentSchema);

module.exports = Student;