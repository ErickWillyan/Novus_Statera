import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyD5fLzAnOAIU45AG9X11Ti0mLRSv_SJDGA",
    authDomain: "novus-statera-8772a.firebaseapp.com",
    databaseURL: "https://novus-statera-8772a-default-rtdb.firebaseio.com",
    projectId: "novus-statera-8772a",
    storageBucket: "novus-statera-8772a.appspot.com",
    messagingSenderId: "831250431744",
    appId: "1:831250431744:web:7e9601d86cd757e46d3de5",
    measurementId: "G-ED14ED5NJH"
  };
  
  if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;