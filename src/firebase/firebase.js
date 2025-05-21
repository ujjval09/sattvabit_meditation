// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZMYUeySnXUxKvVnMPypJ5IOnwF1-Gqrw",
  authDomain: "meditation-app-34caf.firebaseapp.com",
  projectId: "meditation-app-34caf",
  storageBucket: "meditation-app-34caf.appspot.com",
  messagingSenderId: "930632498151",
  appId: "1:930632498151:web:fb20e973890156e2819b42"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
