// { name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, logoLink: {mandatory}, isDeleted: {boolean, default: false} }

const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: [true, "Name already Exist"]
    },
    fullName: {
        required: true,
        type: String
    },
    logoLink: {
        type: String,
        required: true
    },
    isDeleted : {
        type: Boolean,
        default: false
    }
}, {timestamps: true}
)

module.exports = mongoose.model('College', collegeSchema);