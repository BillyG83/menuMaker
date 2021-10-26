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

// initalizing the firebase package with guard to prevent double innit
if (!firebase.apps.length) {
    firebase.initializeApp(config);
 } else {
    // if already initialized, use that one
    firebase.app();
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()


// sign in with Google popup
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)


// creating a user in the database when signed in
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // early return if the user auth object is not there
    if (!userAuth) return

    // getting the firebase snapshot of a users data
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    // if this user does not already exist
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date().toISOString().split('T')[0]

        try {
            // set the current user obj to the user ref to firebase
            await userRef.set({
                createdAt,
                displayName,
                email,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user: ', error)
        }
    }

    // return userRef so components can use the snap shot data
    return userRef
}

// adds a new menu to the users account
export const addNewMenu = async (userId, newMenuData) => {
    if (!userId || !newMenuData) return

    // getting the firebase snapshot of a users accounts
    const accountRef = firestore.doc(`users/${userId}/accounts/${newMenuData.businessId}`)
    const snapShot = await accountRef.get()
    
    if (!snapShot.exists) {
        try {
            // set the current user obj to the user ref to firebase
            await accountRef.set({
                ...newMenuData
            })
        } catch (error) {
            console.warn('error creating user account: ', error)
        }
    } else {
        console.warn('This menu can not be created as it already exists: ', error)
    }

    return
}

// saves updates made to a menu
export const saveMenuChanges = async (userId, newMenuData) => {
    if (!userId || !newMenuData) return

    // getting the firebase snapshot of a users accounts
    const accountRef = firestore.doc(`users/${userId}/accounts/${newMenuData.businessId}`)
    const snapShot = await accountRef.get()
    
    if (snapShot.exists) {
        try {
            // if the menu exists and then overwrite its data with new menu data
            await accountRef.set(newMenuData)
        } catch (error) {
            console.warn('error updating user account menu: ', error)
        }
    } else {
        console.warn('error the menu can not be saved as it does not exist: ', error)
    }

    return
}

// get collection of logged in users saved parks from firestore
export const getUsersMenus = async (userID) => {
    if (!userID) return
    let menuAccounts = null

    // check to see if the user has the collection
    const usersMenuAccounts = firestore.collection(`users/${userID}/accounts`)
    const usersAccountsSnapShot = await usersMenuAccounts.get()

    if (usersAccountsSnapShot.size <= 0) {
        return menuAccounts = false
    } else {
        menuAccounts = []
        usersAccountsSnapShot.docs.forEach(doc => {
            const menuSnapShotData = doc.data()
            menuAccounts.push(menuSnapShotData)
        })
    }
    return menuAccounts
}

export default firebase