import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBreCeCPMUPO63DFyNNysk_VcQqtTPM96w",
    authDomain: "covid-health-tracker-c7712.firebaseapp.com",
    projectId: "covid-health-tracker-c7712",
    storageBucket: "covid-health-tracker-c7712.appspot.com",
    messagingSenderId: "291449491008",
    appId: "1:291449491008:web:c99a95aa560ae47e4159a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();