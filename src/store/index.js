import { createStore, compose, applyMiddleware } from "redux";

import { reactReduxFirebase } from "react-redux-firebase";

import createSagaMiddleware from "redux-saga";

import { reduxFirestore } from "redux-firestore";

import firebase from "firebase";

import "firebase/firestore";

import sagas from "./sagas";

import reducers from "./reducers";

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

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {}, // initial state
    composeEnhancers(
        reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
        reduxFirestore(firebase),
        applyMiddleware(...middleware)
    )
);

export default store;

sagaMiddleware.run(sagas);
