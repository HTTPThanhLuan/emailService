
require('dotenv').config();
const mailgun = require('mailgun-js')({ apiKey: process.env.MyMailGunKey, domain: process.env.MyMailGunDomain })


module.exports = class mailGun{
    
          
    constructor(from, to, subject, html ){
        this.from=from;
        this.to=to;
        this.subject=subject;
        this.html=html;
    }
    send(){
             //Send email
     return mailgun.messages().send(this);

    }


};