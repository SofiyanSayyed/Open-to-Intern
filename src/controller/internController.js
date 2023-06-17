const internModel = require('../models/internModel');
const collegeModel = require('../models/collegeModel');
const validator = require('validator');
const {isValid, validString, validEmail} = require('../validators/validations');


const createIntern = async (req, res) => {
    try{
        let data = req.body
        let {name, email, mobile, collegeId} = data
        
        
        //Checking Validation for credentials
        if(Object.keys(data).length === 0) return res.status(400).send({status: false, message: "Please provide required information"})
        if(!name || !email || !mobile ) return res.status(400).send({status: false, message: "Please provide information"});
        if(!isValid(name) || !validString(name)) return res.status(400).send({status:false, message: "Invalid Name"})
        if(!validEmail(email)) return res.status(400).send({status:false, message: "Invalid Email"})
        if(!validator.isMobilePhone(mobile)) return res.status(400).send({status:false, message: "Invalid Mobile Number"})
        
        //Check if the college Id is incorrect
        let isCollege = await collegeModel.findById(collegeId)
        if(!isCollege) return res.status(400).send({status:false, message: "College not found"})

        let intern = await internModel.create(data)
        return res.status(201).send({status: true, data: intern})

    }
    catch(err){
        return res.status(500).send({status:false, message: err.message})

    }


}

module.exports = {createIntern}