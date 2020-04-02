import React from 'react'

import Header from './Header'
import useStyles from './useStyles'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const PublicLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Header></Header>
      <main className={classes.main}>{children}</main>
    </>
  )
}

export default PublicLayout
