const express = require('express');
const firebaseAdmin = require('firebase-admin');
const app = express();
app.use(express.json());
app.get('/check', (req, res) => {
  res.status(200).json({
    message: 'Server running successfully',
  });
});
app.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  const user = await firebaseAdmin.auth().createUser({
    email,
    password,
  });
  if (!user) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
  const userData = {
    email,
    name,
  };
  await firebaseAdmin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .set(userData);
  res.status(200).json({
    user,
  });
});
module.exports = (port) => {
  app.listen(port, () => {
    console.log(`Server started at ${port}`);
  });
};
