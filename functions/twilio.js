const twilio = require('twilio');

const accountSid = 'mail';
const authToken = 'mail';

module.exports =  new twilio.Twilio(accountSid, authToken);