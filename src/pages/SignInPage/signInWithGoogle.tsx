import * as firebase from 'firebase'

type SignInWithGoogle = {
  auth: firebase.auth.Auth
}

const signInWithGoogle = async ({ auth }: SignInWithGoogle) => {
  try {
    await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  } catch (error) {
    console.error(error)
  }
}

export default signInWithGoogle
