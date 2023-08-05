var User = require('../user');
var csv = require('csvtojson');
const { response } = require('../route/userRoute');

const importUser = async(req,res)=>{
   
    try{
        var userData =[];
        csv().fromFile(req.file.path).then(async(response)=>{
         for(var x=0; x<response.length;x++){
           userData.push({
            agent:response[x].agent,
            userType:response[x].userType,
            policy_mode:response[x].policy_mode,
            producer:response[x].producer,
            policy_number:response[x].policy_number,
            premium_amount:response[x].premium_amount,
            policy_type:response[x].policy_type,
            company_name:response[x].company_name,
            category_name:response[x].category_name,
            policy_start_date:response[x].policy_start_date,
            policy_end_date:response[x]. policy_end_date,
            csr:response[x].csr,

            account_name:response[x].account_name,
            email:response[x].email,
            gender:response[x].gender,
            firstname:response[x].firstname,
            city:response[x].city,

            account_type:response[x].account_type,
            phone:response[x].phone,
            address:response[x].address,

            state:response[x].state,
            zip:response[x].zip,
            dob:response[x].dob
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