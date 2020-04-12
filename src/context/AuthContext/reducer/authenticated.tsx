import { User } from 'firebase'

import { State } from './'

type Payload = {
  user: User
}

export type Action = {
  type: 'AUTHENTICATED'
  payload: Payload
}

export type Authenticated = {
  state: State
  action: Action
}

const authenticated = ({ state, action }: Authenticated): State => {
  if (!action || !action.payload || !action.payload.user) {
    // eslint-disable-next-line no-console
    console.error('Undefined "user" in action', action)
    return state
  }

  return {
    ...state,
    loading: false,
    authenticated: true,
    user: action.payload.user,
  }
}

export default authenticated
