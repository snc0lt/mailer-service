const mailer = require('../controller/mailer');

module.exports = router => {
    // test route
    router.get('/ping', (_, res) => {res.send('PONG!')});

    // send email
    router.post('/email-to', mailer.send);

    return router;
};