import React from 'react'
import 'services/firebase'
import * as firebase from 'firebase'

import RouterPrivate from './RouterPrivate'
import RouterPublic from './RouterPublic'
import useAuth from './useAuth'

function App(): React.ReactElement {
  const { loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  const { currentUser } = firebase.auth()

  if (!currentUser) {
    return <RouterPublic />
  }

  return currentUser.isAnonymous ? <RouterPublic /> : <RouterPrivate />
}

export default App
