const admin = require('firebase-admin');
const serviceAccount = require('./service_account.json')
const functions = require('firebase-functions');
const createUser = require('./createUser');
const requestOneTimePassword = require('./request_one_time_password');
const verifyOneTimePassword = require('./verify-one-time-password');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://onetimepassword-afe47.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);