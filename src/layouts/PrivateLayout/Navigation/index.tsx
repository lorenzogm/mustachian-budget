import React from 'react'

import Button from 'components/Button'
import Link from 'components/Link'
import signOut from './signOut'
import useStyles from './useStyles'

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.navigation}>
      <Link to="/accounts">Mustachian Budget</Link>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  )
}

export default Navigation
