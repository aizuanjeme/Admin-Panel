// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHOeZpYEdKMun-pP8T2OCyy1lOklOzan8",
  authDomain: "adminpanel-78449.firebaseapp.com",
  projectId: "adminpanel-78449",
  storageBucket: "adminpanel-78449.appspot.com",
  messagingSenderId: "183420749928",
  appId: "1:183420749928:web:a4899182ccddc0722b93dd",
  measurementId: "G-ZE204GMBW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
