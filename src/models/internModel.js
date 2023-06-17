// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}

const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    collegeId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    }
},{timestamps:true})

module.exports = mongoose.model('Intern', internSchema);