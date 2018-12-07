import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9x967QjShLNn2xGGwqyWHRNu8otfyAKg",
    authDomain: "playground-1537256747194.firebaseapp.com",
    databaseURL: "https://playground-1537256747194.firebaseio.com",
    projectId: "playground-1537256747194",
    storageBucket: "playground-1537256747194.appspot.com",
    messagingSenderId: "87133116859"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;
