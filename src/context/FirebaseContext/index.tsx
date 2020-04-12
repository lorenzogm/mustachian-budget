import React from 'react'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

// Initialize Firebase
firebase.firestore.setLogLevel('debug')
const app = firebase.initializeApp(firebaseConfig)
// firebase.analytics()

type State = {
  firebase: firebase.app.App
  auth: firebase.auth.Auth
  db: firebase.firestore.Firestore
}
const FirebaseContext = React.createContext<State>({ firebase: app, auth: app.auth(), db: app.firestore() })

type FirebaseContextProviderType = {
  children: React.ReactNode
}

const FirebaseContextProvider = ({ children }: FirebaseContextProviderType) => {
  return (
    <FirebaseContext.Provider value={{ firebase: app, auth: app.auth(), db: app.firestore() }}>
      {children}
    </FirebaseContext.Provider>
  )
}

type UseFirebaseContext = State

function useFirebaseContext(): UseFirebaseContext {
  const context = React.useContext(FirebaseContext)

  if (context === undefined) {
    throw new Error('useFirebaseContext must be used within a FirebaseContextProvider')
  }

  return context
}

export { useFirebaseContext, FirebaseContextProvider }
