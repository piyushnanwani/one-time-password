
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const createUser = require("./create_user");
const serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://one-time-password-75a25-default-rtdb.asia-southeast1.firebasedatabase.app",
});

exports.createUser = functions.https.onRequest(createUser);
