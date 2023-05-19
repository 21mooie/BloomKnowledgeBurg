// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBECA-QFuaHE-p0bBDE6RJGqIRMU0pZu04",
  authDomain: "bootcamp-blind.firebaseapp.com",
  projectId: "bootcamp-blind",
  storageBucket: "bootcamp-blind.appspot.com",
  messagingSenderId: "1025600180100",
  appId: "1:1025600180100:web:253adf2239e4e0f36057d1",
  measurementId: "G-REQGZ9RQC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
console.log('ran firebase');

export default app;