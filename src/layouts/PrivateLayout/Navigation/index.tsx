import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'

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
      <Link to="/">Home</Link>
    </Drawer>
  )
}

export default Navigation
