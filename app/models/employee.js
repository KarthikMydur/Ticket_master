const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name:  {
        type: String,
        required: true,
        minlength: 4
    },
    mobile: {
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return validator.isMobilePhone(value)
            },
            message: function(){
                return 'invalid phone no. please check again'
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: "Department",
        required: true
    }
})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee