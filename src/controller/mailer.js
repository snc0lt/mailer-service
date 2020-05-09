const ejs = require('ejs');
const path = require('path');
const sendEmail = require('../utils');

const template = path.join(__dirname, '../template/email.ejs');

class Mailer {
    async send (req, res) {
        const { body: { to, subject } } = req;
        let emailResult = null;
        try {
            const emailData = { to, subject };
            const html = await ejs.renderFile(template, emailData);
            emailResult = await sendEmail(to, subject, html);
        } catch (err) {
            console.error(err);
        }
        res.status(200).send(emailResult);
    }
}

module.exports = new Mailer();