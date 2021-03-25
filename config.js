import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCwTolAbNofYXlDlS8WR7Wz6XD8Zp_4fDE",
  authDomain: "wiliy-402fe.firebaseapp.com",
  projectId: "wiliy-402fe",
  storageBucket: "wiliy-402fe.appspot.com",
  messagingSenderId: "531796405775",
  appId: "1:531796405775:web:e0e8c323844c2dad0afd7a",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
