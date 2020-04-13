import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import * as firebase from 'firebase/app'

import PrivateLayout from 'layouts/PrivateLayout'

type PrivateRouteProps = RouteProps & {
  component: React.ElementType
  layout?: React.FC
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, layout, ...rest }) => {
  const user = firebase.auth().currentUser

  const Layout = layout || PrivateLayout

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
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
