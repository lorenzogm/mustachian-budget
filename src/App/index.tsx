import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { auth } from 'services/firebase'
import PrivateLayout from 'layouts/PrivateLayout'
import PublicLayout from 'layouts/PublicLayout'
import AccountListPage from 'pages/AccountListPage'
import HomePage from 'pages/HomePage'
import SignUpPage from 'pages/SignUpPage'
import SignInPage from 'pages/SignInPage'

import RoutePrivate from './RoutePrivate'
import RoutePublic from './RoutePublic'

const App: React.FC = () => {
  const [{ authenticated, loading }, setState] = React.useState({
    authenticated: false,
    loading: true,
  })

  React.useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setState({
          authenticated: true,
          loading: false,
        })
      } else {
        setState({
          authenticated: false,
          loading: false,
        })
      }
    })
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
      </Switch>
    </Router>
  )
}

export default App
