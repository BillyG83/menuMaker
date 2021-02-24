import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// the config settings from firebase 
const config = {
    apiKey: "AIzaSyAdHDpHvKeSJCD1KRwKm_gyc3o0ABnFJfo",
    authDomain: "menu-maker-app.firebaseapp.com",
    databaseURL: "https://menu-maker-app-default-rtdb.firebaseio.com",
    projectId: "menu-maker-app",
    storageBucket: "menu-maker-app.appspot.com",
    messagingSenderId: "282983380769",
    appId: "1:282983380769:web:1e6ccb995f0b07844e3060",
    measurementId: "G-5KP997GH8L"
}

// initalizing the firebase package
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// sign in with Google popup
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase