const express= require('express');
const sendGrid= require('../controllers/sendGrid');
const mailGun= require('../controllers/mailGun');

var router = express.Router();

/* POST mail with sendgrid */
router.get('/sendgrid', sendGrid.send);

/* POST mail with mailGun */
router.post('/mailgun', mailGun.send );

module.exports = router;
