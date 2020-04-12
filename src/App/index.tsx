import React from 'react'

import { FirebaseContextProvider } from 'context/FirebaseContext'
import { AuthContextProvider } from 'context/AuthContext'

import Router from './Router'

const App: React.FC = () => {
  return (
    <FirebaseContextProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </FirebaseContextProvider>
  )
}

export default App
