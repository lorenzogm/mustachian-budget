import React from 'react'
import Drawer from '@material-ui/core/Drawer'

import Button from 'components/Button'
import Link from 'components/Link'
import signOut from './signOut'
import useStyles from './useStyles'

const Navigation = () => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Link to="/accounts">Mustachian Budget</Link>
      <Button onClick={signOut}>Sign Out</Button>
    </Drawer>
  )
}

export default Navigation
