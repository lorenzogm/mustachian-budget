import React from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'

import PrivateLayout from 'layouts/PrivateLayout'
import AccountDetailPage from 'pages/AccountDetailPage'
import AccountCreate from 'pages/AccountCreatePage'
import RouteWithLayout from 'App/RouteWithLayout'

function RouterPrivate(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout exact path="/accounts" component={AccountDetailPage} layout={PrivateLayout}></RouteWithLayout>
        <RouteWithLayout
          exact
          path="/accounts/create"
          component={AccountCreate}
          layout={PrivateLayout}
        ></RouteWithLayout>
        <RouteWithLayout
          exact
          path="/accounts/:accountId"
          component={AccountDetailPage}
          layout={PrivateLayout}
        ></RouteWithLayout>

        <Route path="*">
          <Redirect to="/accounts" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default RouterPrivate
