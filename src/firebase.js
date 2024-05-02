import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from 'firebase/firestore'

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyD97hbTD1I3Y53tUJUXuiqmZfg7Awq2yjk",
    authDomain: "mirman-blackbaud.firebaseapp.com",
    projectId: "mirman-blackbaud",
    storageBucket: "mirman-blackbaud.appspot.com",
    messagingSenderId: "549298260918",
    appId: "1:549298260918:web:64877382bd7db9d3950f17",
    measurementId: "G-81JYP3X871"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app)

  export { auth, db } 