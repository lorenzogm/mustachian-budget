import { User } from 'firebase'

import authenticated, { Action as ActionAuthenticated } from './authenticated'
import authenticatedNot, { Action as ActionAuthenticatedNot } from './authenticatedNot'

export type State = {
  authenticated: boolean
  loading: boolean
  user: User | null
}

export type Action = ActionAuthenticated | ActionAuthenticatedNot

export type reducerType = {
  state: State
  action: Action
}

const reducer = (state: State, action: Action): State => {
  // eslint-disable-next-line no-console
  console.log('AuthContext', { state, action })

  switch (action.type) {
    case 'AUTHENTICATED':
      return authenticated({ state, action })

    case 'AUTHENTICATED_NOT':
      return authenticatedNot({ state, action })

    default:
      return state
  }
}

export default reducer
