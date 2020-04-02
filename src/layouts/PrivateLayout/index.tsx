import React from 'react'

import Navigation from './Navigation'

type PrivateLayoutProps = {
  children?: React.ReactNode
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => (
  <div>
    <Navigation></Navigation>
    <hr></hr>
    <section>{children}</section>
  </div>
)

export default PrivateLayout
