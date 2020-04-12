import * as firebase from 'firebase'

type signOutType = {
  auth: firebase.auth.Auth
}

const signOut = ({ auth }: signOutType) => {
  try {
    auth.signOut()
  } catch (error) {
    console.error(error)
  }
}

export default signOut
