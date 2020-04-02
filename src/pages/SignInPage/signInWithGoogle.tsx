import firebase from 'services/firebase'

const signInWithGoogle = async () => {
  try {
    await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  } catch (error) {
    console.error(error)
  }
}

export default signInWithGoogle
