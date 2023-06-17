const collegeModel = require('../models/collegeModel');
const internModel = require('../models/internModel');
const {isValid, validString} = require('../validators/validations');

const createCollege = async (req, res) => {
    try{
        let data = req.body;
        let {name, fullName, logoLink} = data

        //Check Validations for provided data/Credentials
        if(Object.keys(data).length === 0) return res.status(400).send({status: false, message: "Please provide required information"})
        if(!isValid(name) || validString(name)) return res.status(400).send({status:false, meassage: "Invalid name"})
        if(!isValid(fullName) || validString(fullName)) return res.status(400).send({status:false, meassage: "Invalid Fullname"})
        if(!isValid(logoLink)) return res.status(400).send({status:false, meassage: "Invalid Longo Link"})


        let createCollege = await collegeModel.create(data);
        if(!createCollege) return res.status(404).send({ message: "error creating"})
        return res.status(201).send({status: true, data: createCollege})

    }
    catch(err){
        res.status(500).send({status:false, message: err.message})
    }
}



const getColleges = async function(req,res){
    try{
        let {collegeName} = req.query
        if(!collegeName) return res.status(400).send({status: false, message: "please provide College name"})

        let college = await collegeModel.findOne({name: collegeName, isDeleted: false})
        if(!college) return res.status(404).send({status:false, message: "College name not found"})
        let id = college._id
        let interns = await internModel.find({collegeId: id})

        if(interns.length === 0) return res.status(404).send({status:false, message: "No interns found"})

        return res.status(200).send({status:true, data : {
            "name": college.name,
            "fullName": college.fullName,
            "logoLink": college.logoLink,
            "interns": interns
        }})
    }
    catch(err){
        res.status(500).send({status:false, message: err.message})
    }
    


}

module.exports = {createCollege,getColleges}