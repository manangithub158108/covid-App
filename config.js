import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCPZmnJbPpYyN24RRZT9fcbccYUeYrL5Zw",
    authDomain: "covid-shield-app.firebaseapp.com",
    projectId: "covid-shield-app",
    storageBucket: "covid-shield-app.appspot.com",
    messagingSenderId: "957714105111",
    appId: "1:957714105111:web:41d9a21ce7ebda24102d52"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();