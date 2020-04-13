import * as firebase from 'firebase/app'

const signOut = () => {
  try {
    firebase.auth().signOut()
  } catch (error) {
    console.error(error)
  }
}

export default signOut
