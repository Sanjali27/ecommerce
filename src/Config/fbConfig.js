import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5ZiW7Bj1LJltlUivyEHemBb2zL071aeA",
  authDomain: "project-manager-3e38f.firebaseapp.com",
  databaseURL: "https://project-manager-3e38f.firebaseio.com",
  projectId: "project-manager-3e38f",
  storageBucket: "project-manager-3e38f.appspot.com",
  messagingSenderId: "582831153147",
  appId: "1:582831153147:web:2516047c33dda7c62ff55e",
  measurementId: "G-T3CBZJYF94"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
