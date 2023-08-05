var User = require('../user');
var csv = require('csvtojson');
const { response } = require('../route/userRoute');

const importUser = async(req,res)=>{
   
    try{
        var userData =[];
        csv().fromFile(req.file.path).then(async(response)=>{
         for(var x=0; x<response.length;x++){
           userData.push({
            agent:response[x].agent
           })
         }
         await User.insertMany(userData);
        })
        res.send({status:200,success:true,msg:'runi'})
    }catch(error){
     res.send({status:400,success:false,msg:error.message})
    }
}
module.exports = {importUser}