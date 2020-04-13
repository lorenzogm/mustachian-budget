import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import * as firebase from 'firebase/app'
import PublicLayout from 'layouts/PublicLayout'

type PublicRouteProps = RouteProps & {
  component: React.ElementType
  layout?: React.FC
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, layout, ...rest }) => {
  const user = firebase.auth().currentUser

  console.log(user)

  const Layout = layout || PublicLayout

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Redirect to="/accounts" />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  )
}

export default PublicRoute
