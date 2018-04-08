// @flow

import typeToReducer from 'type-to-reducer'
import { FETCH_USER_INFO_TYPE } from '../actions'
import type { User, Repository } from '../types'

type State = {
  isLoading: boolean,
  user: User,
  repositories: Repository[],
  error: Object
}

const initialState: State = {
  isLoading: false,
  user: {
    id: null,
    login: '',
    avatar_url: '',
  },
  repositories: [],
  error: {}
}

const userInfo = typeToReducer({
  [FETCH_USER_INFO_TYPE]: {
    PENDING: (): State => ({
      ...initialState,
      isLoading: true
    }),
    FULFILLED: (state, action): State => ({
      ...initialState,
      user: action.payload[0],
      repositories: action.payload[1]
    }),
    REJECTED: (state, action): State => ({
      ...initialState,
      error: action.payload.error
    })
  }
}, initialState)

export { userInfo }
