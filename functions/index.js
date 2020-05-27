const functions = require('firebase-functions');
const { expressServer } = require('./server');

const moleculerApi = functions.https.onRequest(expressServer);

module.exports = {
    moleculerApi
};


