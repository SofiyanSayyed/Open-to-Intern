const express = require('express');
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes/router')
require('dotenv').config();
const {PORT, DB_STRING} = process.env

app.use(express.json())

mongoose.connect(DB_STRING, {
    useNewUrlParser : true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("error " + err.message))

app.use('/', routes)

app.listen(PORT, function(){
    console.log("listening on port " + PORT)
})