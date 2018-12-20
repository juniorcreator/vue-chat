import firebase from "firebase"
import firestore from "firebase/firestore"
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBzz-ljrGu9fc--G5Ua0AbkrxXJMLQhXtw",
  authDomain: "vue-chat-1a8e0.firebaseapp.com",
  databaseURL: "https://vue-chat-1a8e0.firebaseio.com",
  projectId: "vue-chat-1a8e0",
  storageBucket: "vue-chat-1a8e0.appspot.com",
  messagingSenderId: "92935004064"
};
const firebaseApp = firebase.initializeApp(config);

/// if has some errors
firebaseApp.firestore().settings({timestampsInSnapshots: true });

export default firebaseApp.firestore();