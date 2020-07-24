import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyD1mJoBWxATZTzaib2PhJx4ciHI5nwOfP0",
    authDomain: "rumah-sakit-sukabumi.firebaseapp.com",
    databaseURL: "https://rumah-sakit-sukabumi.firebaseio.com",
    projectId: "rumah-sakit-sukabumi",
    storageBucket: "rumah-sakit-sukabumi.appspot.com",
    messagingSenderId: "961729064962",
    appId: "1:961729064962:web:2d2994361bb64cba71f71b"
});

const Fire = firebase;

export default Fire;