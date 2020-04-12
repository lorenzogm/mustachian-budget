import React from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'

import PrivateLayout from 'layouts/PrivateLayout'
import PublicLayout from 'layouts/PublicLayout'
import AccountListPage from 'pages/AccountListPage'
import HomePage from 'pages/HomePage'
import SignUpPage from 'pages/SignUpPage'
import SignInPage from 'pages/SignInPage'

import RoutePrivate from './RoutePrivate'
import RoutePublic from './RoutePublic'
import { useAuthContext } from 'context/AuthContext'

const Router = () => {
  const [{ authenticated }] = useAuthContext()

  return (
    <BrowserRouter>
      <Switch>
        <RoutePublic
          exact
          path="/"
          component={HomePage}
          layout={PublicLayout}
          authenticated={authenticated}
        ></RoutePublic>
        <RoutePublic
          path="/signup"
          component={SignUpPage}
          layout={PublicLayout}
          authenticated={authenticated}
        ></RoutePublic>
        <RoutePublic
          path="/signin"
          component={SignInPage}
          layout={PublicLayout}
          authenticated={authenticated}
        ></RoutePublic>
        <RoutePrivate
          path="/accounts"
          component={AccountListPage}
          layout={PrivateLayout}
          authenticated={authenticated}
        ></RoutePrivate>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
