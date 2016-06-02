var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("entro-----------------------------")
        var transporter = nodemailer.createTransport({
            service: 'Mailgun',
            auth: {
              /*
                user: 'postmaster@sandboxb7d3126ecba24dcabf57d1a8dcec11cb.mailgun.org',
                pass:'postmaster@sandboxb7d3126ecba24dcabf57d1a8dcec11cb.mailgun.org'
                */
                /* ultima que funcionó jonas
                user: 'postmaster@sandboxf9a06959cc684146bef93b1b8250ac9b.mailgun.org',
                pass:'52e52c9ac4f8dcc9468b236345d0559b'

                ultimo que funciono de rodrigo
                user: "postmaster@sandboxb7d3126ecba24dcabf57d1a8dcec11cb.mailgun.org",
                pass: "30c5e730f5a5ef584ffcc8a0dccd079f"

                ultimo que funciono combinado
                user: process.env.EMAIL_USER || 'postmaster@sandboxf9a06959cc684146bef93b1b8250ac9b.mailgun.org',
                pass: process.env.EMAIL_PASS || '52e52c9ac4f8dcc9468b236345d0559b'
                */
/* asi no funciona
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
*/

                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS

            }
        });
    console.log(nodemailer);
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
            console.log("exito");
            res.json({ success: true });
        });
});

module.exports = router;
