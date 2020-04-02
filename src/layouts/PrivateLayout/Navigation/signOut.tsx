import firebase from 'services/firebase'

const signOut = () => {
  try {
    firebase.auth().signOut()
  } catch (error) {
    console.error(error)
  }
}

export default signOut
