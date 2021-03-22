const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'please enter valid email'
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return validator.isMobilePhone(value)
            },
            message: function(){
                return 'please enter the valid phone number'
            }
        }
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer   