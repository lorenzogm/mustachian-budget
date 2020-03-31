import React from 'react'

import { Route, Redirect, RouteProps } from 'react-router-dom'

type PublicRouteProps = RouteProps & {
  component: React.ElementType
  layout: React.FC
  authenticated: boolean
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, layout: Layout, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}

export default PublicRoute
