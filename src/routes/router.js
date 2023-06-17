const express = require('express');
const router = express.Router()
const {createCollege,getColleges} = require('../controller/collegeController')
const {createIntern} = require('../controller/internController')

router.post('/functionup/colleges', createCollege)
router.post('/functionup/interns', createIntern)
router.get('/functionup/collegeDetails', getColleges)

router.all('/*', async function (req, res) {
    res.status(404).send({status: false, message: 'Request Not Found'})
})

module.exports = router