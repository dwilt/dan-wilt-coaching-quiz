import { createStore, combineReducers, compose } from "redux";

import { reactReduxFirebase } from "react-redux-firebase";

import { reduxFirestore, firestoreReducer } from "redux-firestore";

import firebase from "firebase";

import "firebase/firestore";

// react-redux-firebase config
const rrfConfig = {
    userProfile: `users`,
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp({
    apiKey: `AIzaSyBVRfPWkOwK2mWquD7-BP4r4v4pXYWL6l8`,
    authDomain: `dan-wilt-coaching-assessmen.firebaseapp.com`,
    databaseURL: `https://dan-wilt-coaching-assessmen.firebaseio.com`,
    projectId: `dan-wilt-coaching-assessmen`,
    storageBucket: `dan-wilt-coaching-assessmen.appspot.com`,
    messagingSenderId: `92351047707`,
});

firebase.firestore();

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
    firestore: firestoreReducer, // <- needed if using firestore
});

export default createStoreWithFirebase(
    rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
