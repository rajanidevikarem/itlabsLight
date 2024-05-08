// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import jobslist1 from "./components/jobslist1";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSBlV0w85f0vuo-Z6t8_6CunXBX0coLww",
  authDomain: "job-list-645b4.firebaseapp.com",
  projectId: "job-list-645b4",
  storageBucket: "job-list-645b4.appspot.com",
  messagingSenderId: "47914001453",
  appId: "1:47914001453:web:415d20ec628bbef9a104a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db};