const { google } = require('googleapis');
const { clientId, clientSecret, refreshToken, redirectUrl } = require('../config');

const clientOauth = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUrl
);

clientOauth.setCredentials({
    refresh_token: refreshToken
});

module.exports = clientOauth;