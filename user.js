var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    agent:{
        type:String
    }

});
module.exports= mongoose.model('Csv',userSchema);