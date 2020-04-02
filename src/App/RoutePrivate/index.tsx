import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

type PrivateRouteProps = RouteProps & {
  component: React.ElementType
  layout: React.FC
  authenticated: boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  layout: Layout,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
