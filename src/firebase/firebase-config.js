const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./firebase.json');
module.exports = () => {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
  });
};
