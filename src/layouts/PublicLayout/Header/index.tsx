import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import ButtonAsLink from 'components/ButtonAsLink'
import Link from 'components/Link'

import useStyles from './useStyles'

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.title}>
            Mustachian Budget
          </Link>
          <ButtonAsLink color="inherit" to="/signin">
            Sign In
          </ButtonAsLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}
