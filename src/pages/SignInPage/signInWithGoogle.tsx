import * as firebase from 'firebase/app'

const signInWithGoogle = async () => {
  try {
    await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  } catch (error) {
    console.error(error)
  }
}

export default signInWithGoogle
