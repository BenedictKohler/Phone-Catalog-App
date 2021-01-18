// This page establishes a connection with cloud firestore

var admin = require("firebase-admin");

const serviceAccount = require('./phone-catalog-local-firebase-adminsdk-qobo1-a7c97a98ac.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;