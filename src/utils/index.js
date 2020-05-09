const nodemailer = require('nodemailer');
const clientOauth = require('../auth');

const { clientId, clientSecret, refreshToken, user } = require('../config');


const accessToken = clientOauth.getAccessToken();

const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'Oauth2',
        user,
        clientId,
        clientSecret,
        refreshToken,
        accessToken
    }
});

async function sendEmail (to, subject, html) {
    const mailOptions = {
        from: user,
        to,
        subject,
        html
    }
    return smtpTransport.sendMail(mailOptions);
}

module.exports = sendEmail;