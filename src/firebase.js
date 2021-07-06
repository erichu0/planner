import firebase from '@firebase/app'
import '@firebase/database'
import '@firebase/auth'
import React from 'react'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_APIKEY,
    authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FB_DATABASEURL,
    projectId: process.env.REACT_APP_FB_PROJECTID,
    storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FB_APPID
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Authentication Instance
const auth = firebaseApp.auth();

// Database Instance
var database = firebase.database();

// React Context
const DatabaseContext = React.createContext()

export {auth, database, DatabaseContext};
export default firebaseApp;