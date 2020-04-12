import { State } from './'

export type Action = {
  type: 'AUTHENTICATED_NOT'
}

export type AuthenticatedNot = {
  state: State
  action: Action
}

const authenticatedNot = ({ state, action }: AuthenticatedNot): State => {
  return {
    ...state,
    loading: false,
    authenticated: false,
    user: null,
  }
}

export default authenticatedNot
