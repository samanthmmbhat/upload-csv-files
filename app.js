const express = require('express');
const app = express();

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/xlx");

var userRoute = require('./route/userRoute')
app.use('/',userRoute);
app.listen(3000,function(){
    console.log('app listing');
})