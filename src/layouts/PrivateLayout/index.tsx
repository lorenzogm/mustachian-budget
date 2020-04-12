import React from 'react'

import Navigation from './Navigation'
import useStyles from './useStyles'

type PrivateLayoutProps = {
  children?: React.ReactNode
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const classes = useStyles()
  return (
    <main className={classes.main}>
      <nav>
        <Navigation></Navigation>
      </nav>
      <section>{children}</section>
    </main>
  )
}

export default PrivateLayout
