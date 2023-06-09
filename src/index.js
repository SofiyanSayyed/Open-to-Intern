const express = require('express');
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes/router')
const PORT = 3000

app.use(express.json())


mongoose.connect("mongodb+srv://SofiyanSayyed:hsxRh6DS5ZlfI1Kj@cluster0.lnyemj3.mongodb.net/Sofiyan_1302", {
    useNewUrlParser : true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("error " + err.message))

app.use('/', routes)

app.listen(process.env.PORT || PORT, function(){
    console.log("listening on port " + PORT)
})