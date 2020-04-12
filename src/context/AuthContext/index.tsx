import React from 'react'

import reducer, { State } from './reducer'
import initialState from './initialState'
import { useFirebaseContext } from 'context/FirebaseContext'
import { Action } from './reducer/authenticated'

type Dispatch = (action: Action) => void

const AuthStateContext = React.createContext<State | undefined>(undefined)
const AuthDispatchContext = React.createContext<Dispatch | undefined>(undefined)

type AuthContextProviderType = {
  children: React.ReactNode
}

function AuthContextProvider({ children }: AuthContextProviderType) {
  const { auth } = useFirebaseContext()
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: 'AUTHENTICATED', payload: { user } })
      } else {
        dispatch({ type: 'AUTHENTICATED_NOT' })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [auth])

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

function useState(): State {
  const context = React.useContext(AuthStateContext)

  if (context === undefined) {
    throw new Error('useState must be used within a AuthProvider')
  }

  return context
}

function useDispatch(): Dispatch {
  const context = React.useContext(AuthDispatchContext)

  if (context === undefined) {
    throw new Error('useDispatch must be used within a AuthProvider')
  }

  return context
}

function useAuthContext(): [State, Dispatch] {
  return [useState(), useDispatch()]
}

export { useAuthContext, AuthContextProvider }
