import React from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'

import PublicLayout from 'layouts/PublicLayout'
import HomePage from 'pages/HomePage'
import SignUpPage from 'pages/SignUpPage'
import SignInPage from 'pages/SignInPage'
import RouteWithLayout from 'App/RouteWithLayout'

function RouterPublic(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout exact path="/" component={HomePage} layout={PublicLayout}></RouteWithLayout>
        <RouteWithLayout path="/signup" component={SignUpPage} layout={PublicLayout}></RouteWithLayout>
        <RouteWithLayout path="/signin" component={SignInPage} layout={PublicLayout}></RouteWithLayout>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default RouterPublic
