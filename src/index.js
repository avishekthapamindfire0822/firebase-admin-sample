require('./config');
const firebaseInitialize = require('./firebase/firebase-config');
const initializeApp = require('./app');

firebaseInitialize();
initializeApp(process.env.PORT);
