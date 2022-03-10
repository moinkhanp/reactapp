import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyC8VZISeLCmfydN33v7pAYtvamOagt7Q9w",
  authDomain: "mernstackcrud.firebaseapp.com",
  projectId: "mernstackcrud",
  storageBucket: "mernstackcrud.appspot.com",
  messagingSenderId: "166857811808",
  appId: "1:166857811808:web:f6bee13014e03c3bd72005",
  measurementId: "G-ZSHF1HPKZJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); 
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , db , provider };    