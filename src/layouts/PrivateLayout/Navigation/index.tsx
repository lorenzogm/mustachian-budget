import React from 'react'

import Button from 'components/Button'
import Link from 'components/Link'
import signOut from './signOut'
import useStyles from './useStyles'
import { useFirebaseContext } from 'context/FirebaseContext'

const Navigation = () => {
  const classes = useStyles()
  const { auth } = useFirebaseContext()

  const handleSignOut = () => {
    signOut({ auth })
  }

  return (
    <div className={classes.navigation}>
      <Link to="/accounts">Mustachian Budget</Link>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  )
}

export default Navigation
