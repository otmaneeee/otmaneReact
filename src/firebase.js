import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuv12QdczU5y_QnZMEqJ4Nb7H8ffUop70",
  authDomain: "my-first-project-b3606.firebaseapp.com",
  projectId: "my-first-project-b3606",
  storageBucket: "my-first-project-b3606.appspot.com",
  messagingSenderId: "161222012359",
  appId: "1:161222012359:web:c444830a66c16eb7b27de2",
  databaseURL: "https://bezkoder-firebase.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();