import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBHQO2vJSBU0pBmb38VHT1nLq0I_pMrLCs",
    authDomain: "signin-signup-83694.firebaseapp.com",
    databaseURL: "https://signin-signup-83694.firebaseio.com",
    projectId: "signin-signup-83694",
    storageBucket: "signin-signup-83694.appspot.com",
    messagingSenderId: "228150043318",
    appId: "1:228150043318:web:39b06f6a650c4648997c17"
  };
  // Initialize Firebase
  

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;

