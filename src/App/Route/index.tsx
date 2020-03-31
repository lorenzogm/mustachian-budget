import React from 'react'

import { Route as RouteReactRouterDom, RouteProps as RoutePropsDefault } from 'react-router-dom'

type RouteProps = RoutePropsDefault & {
  component: React.ElementType
  layout: React.FC
}

const Route: React.FC<RouteProps> = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <RouteReactRouterDom
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

export default Route
