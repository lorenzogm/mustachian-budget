import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Button from 'components/Button'

import useStyles from './useStyles'

const HomePage: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Mustachian Budget
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Track your expenses
        </Typography>
        <div className={classes.heroButtons}>
          <Button to="signin" variant="contained" color="primary">
            Sign In
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default HomePage
