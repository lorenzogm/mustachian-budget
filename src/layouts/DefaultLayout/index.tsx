import React from 'react'
import Navigation from 'layouts/Navigation'

type Props = {
  children?: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => (
  <div>
    <Navigation></Navigation>
    <hr></hr>
    <section>{children}</section>
  </div>
)

export default DefaultLayout
