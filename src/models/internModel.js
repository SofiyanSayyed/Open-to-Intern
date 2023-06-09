// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}

const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (value) {
              return /^\S+@\S+\.\S+$/.test(value);
            },
            message: 'Invalid email address',
          }
    },
    mobile: {
        type: String,
        unique: true
    }    
})

module.exports = mongoose.model('Intern', internSchema);