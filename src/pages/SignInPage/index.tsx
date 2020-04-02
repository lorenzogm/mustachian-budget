import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Container from '@material-ui/core/Container'

import signInWithGoogle from './signInWithGoogle'
import useStyles from './useStyles'

export default function SignIn() {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Button fullWidth variant="contained" color="primary" onClick={signInWithGoogle}>
          Sign In with Google
        </Button>
      </div>
    </Container>
  )
}
