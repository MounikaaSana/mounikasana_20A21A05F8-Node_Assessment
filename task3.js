var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mounikasana80089@gmail.com',
        pass:'uaoeuieimubebhgs'
    }
});
var mailOptions={
    from:'mounikasana80089@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from node js',
    text:'20A21A05F8'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('email send:'+ info.response)
    }
});
