const MailGun = require('../models/mailgun')
const joi = require('joi');
require('dotenv').config();
const mailgun = require('mailgun-js')({ apiKey: process.env.MyMailGunKey, domain: process.env.MyMailGunDomain })

module.exports.send = function(req,res, next){
     const body =  req.body;
     //Validate here. 
     const schema={
      from:joi.string().required(),
      to: joi.string().required(),
      subject: joi.string().min(5).required(),
  //  text: joi.string().min(5).required(),
      html:joi.string().required(),          
     };
     const result = joi.validate(body,schema);
     //400 Badrequest
     if(result.error) return res.status(400).send(result.error.details[0].message);
     console.log(process.env.MyMailGunKey);
      mailgun.messages().send(body,(err,data)=>{
      
         res.send(data);
     });


   
           
}