// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCQ-1axJS0QcvdFXTvdWfPeDLC2KkKKe64",
    authDomain: "facebook-clone-11eba.firebaseapp.com",
    projectId: "facebook-clone-11eba",
    storageBucket: "facebook-clone-11eba.appspot.com",
    messagingSenderId: "829656461500",
    appId: "1:829656461500:web:f5f7cc71904369077760b9",
    measurementId: "G-2E0GBV8NV5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;