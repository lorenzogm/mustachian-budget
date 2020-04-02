import React from 'react'
import { Route, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'

import firebase from 'services/firebase'
import PrivateLayout from 'layouts/PrivateLayout'
import PublicLayout from 'layouts/PublicLayout'
import AccountListPage from 'pages/AccountListPage'
import HomePage from 'pages/HomePage'
import SignUpPage from 'pages/SignUpPage'
import SignInPage from 'pages/SignInPage'

import RoutePrivate from './RoutePrivate'
import RoutePublic from './RoutePublic'
import { User } from 'firebase'

type State = {
  authenticated: boolean
  loading: boolean
  user: User | null
}

const initialState: State = {
  authenticated: false,
  loading: true,
  user: null,
}

const App: React.FC = () => {
  const [{ authenticated, loading }, setState] = React.useState(initialState)

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setState({
          authenticated: true,
          loading: false,
          user,
        })
      } else {
        setState({
          authenticated: false,
          loading: false,
          user: null,
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  if (loading) {
    return <h2>Loading</h2>
  }

  return (
    <Router>
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
    </Router>
  )
}

export default App
