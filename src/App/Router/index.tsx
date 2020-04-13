import React from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'

import AccountListPage from 'pages/AccountListPage'
import HomePage from 'pages/HomePage'
import SignUpPage from 'pages/SignUpPage'
import SignInPage from 'pages/SignInPage'

import RoutePrivate from './RoutePrivate'
import RoutePublic from './RoutePublic'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RoutePublic exact path="/" component={HomePage}></RoutePublic>
        <RoutePublic path="/signup" component={SignUpPage}></RoutePublic>
        <RoutePublic path="/signin" component={SignInPage}></RoutePublic>
        <RoutePrivate path="/accounts" component={AccountListPage}></RoutePrivate>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
