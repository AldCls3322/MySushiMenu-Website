import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDAnmoy_lFvAAq9BknGM5jUJhabPucDpcs",
    authDomain: "sushimenu-website.firebaseapp.com",
    projectId: "sushimenu-website",
    storageBucket: "sushimenu-website.appspot.com",
    messagingSenderId: "438451332207",
    appId: "1:438451332207:web:c67612f05b656bef6a599a"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);