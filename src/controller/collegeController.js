const collegeModel = require('../models/collegeModel');

const createCollege = async (req, res) => {
    let data = req.body;
    let createCollege = await collegeModel.create(data);
    if(!createCollege) return res.status(404).send({ message: "error creating"})

    return res.status(201).send({status: true, data: createCollege})

}

module.exports = {createCollege}