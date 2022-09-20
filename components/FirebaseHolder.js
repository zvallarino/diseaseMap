// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7cM8vRamX10yUlhNr7KwV1ug9JI20Lyw",
  authDomain: "disease-database-ecdd1.firebaseapp.com",
  projectId: "disease-database-ecdd1",
  storageBucket: "disease-database-ecdd1.appspot.com",
  messagingSenderId: "919347533820",
  appId: "1:919347533820:web:3a14e551cc4c36cf314479",
  measurementId: "G-CNRRR895MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);