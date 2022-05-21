import firebase from "firebase/app" ;
import "firebase/auth" ;

 export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyDC2QxqxBFjVfN0K5kaCi2GT3oJqlUmz-0",
    authDomain: "messaging-app-8284d.firebaseapp.com",
    projectId: "messaging-app-8284d",
    storageBucket: "messaging-app-8284d.appspot.com",
    messagingSenderId: "983979350630",
    appId: "1:983979350630:web:ef4b45eb362ad794bc6ba7"
  }).auth();