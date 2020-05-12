import React from 'react'
import { Route as Route_, RouteProps } from 'react-router-dom'

type RouteWithLayoutProps = RouteProps & {
  component: React.FC
  layout: React.FC
}

function RouteWithLayout({ component: Component, layout: Layout, ...rest }: RouteWithLayoutProps): React.ReactElement {
  const render = (props: RouteProps): React.ReactElement => (
    <Layout>
      <Component {...props} />
    </Layout>
  )

  return <Route_ {...rest} render={render} />
}

export default RouteWithLayout
