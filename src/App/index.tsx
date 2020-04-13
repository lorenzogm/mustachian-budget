import React from 'react'
import 'services/firebase'

import Router from './Router'
import useAuth from './useAuth'

const App: React.FC = () => {
  const { loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return <Router />
}

export default App
