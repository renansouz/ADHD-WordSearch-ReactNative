// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/database"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: "AIzaSyBaWOcINHiDUj25uD-rVluLV52uy1HmY0U",
  authDomain: "project-database-8970a.firebaseapp.com",
  databaseURL: "https://project-database-8970a-default-rtdb.firebaseio.com",
  projectId: "project-database-8970a",
  storageBucket: "project-database-8970a.appspot.com",
  messagingSenderId: "1083094005279",
  appId: "1:1083094005279:web:43c9eaeb5d7b37a509872a",
  measurementId: "G-HFEGLM0MX2"
};



// Initialize Firebase
if(!firebase.getApps.length){
  firebase.initializeApp(firebaseConfig)
}

const analytics = getAnalytics(app);

export default firebase