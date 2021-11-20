//const functions = require('firebase-functions');
/*const admin = require('firebase-admin');
admin.initializeApp();

exports.newUserSignup = functions.auth.user().onCreate(user => {

  return admin.firestore().collection('Users').doc(user.uid).set({
    email : user.email,
    upvotedOn : []
  });
});

exports.userDeleted = functions.auth.user().onDelete(user => {

  const doc = admin.firestore().collection('Users').doc(user.uid);
  return doc.delete();
});*/