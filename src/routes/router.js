const express = require('express');
const router = express.Router()
const {createCollege} = require('../controller/collegeController')

router.post('/functionup/colleges', createCollege)

router.all('/*', async function (req, res) {
    res.status(404).send({status: false, message: 'Not Found'})
})

module.exports = router