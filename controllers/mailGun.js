const joi = require('joi');
require('dotenv').config();
const mailgun = require('mailgun-js')({ apiKey: process.env.MyMailGunKey, domain: process.env.MyMailGunDomain })

module.exports.send = function(req,res, next){
      
    //Validate here. 
    const schema={
       from:joi.string().required(),
       to: joi.string().required(),
       subject: joi.string().min(5).required(),
     //  text: joi.string().min(5).required(),
       html:joi.string().required(),          
    }
 
    const result = joi.validate(req.body,schema);

    //400 Badrequest
    if(result.error) return res.status(400).send(result.error.details[0].message);
 
   
    //Send email
    mailgun.messages().send(req.body, (error, body) => {     
        res.send(body);
      });

    console.log('we are in mailGun controller');
      
}