import React from 'react'
import * as firebase from 'firebase/app'

const useAuth = () => {
  const [state, setState] = React.useState({ loading: true })

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.debug('firebase.auth().onAuthStateChange', user)
      setState({ loading: false })
    })
  }, [])

  return state
}

export default useAuth
