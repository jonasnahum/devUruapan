var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    
        var transporter = nodemailer.createTransport({
            service: 'Mailgun',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
         var html = '<p><b>Nombre:</b> ' + req.body.name +'</p>'+
               '<p><b>Email:</b> ' + req.body.email +'</p>'+
               '<p><b>Teléfono:</b> ' + req.body.phone +'</p>'+
               '<p><b>Mensage:</b> ' + req.body.message +'</p>';
        var mailOptions = {
            from: "weburuapan@gmail.com",
            to: req.body.to,
            subject: "Páginas Web Uruapan",
            text: req.body.message,
            html: html
        };
    console.log(mailOptions);
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                return next(error);
            }
            res.json({ success: true });
        });
});

module.exports = router;
