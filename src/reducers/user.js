// @flow

import typeToReducer from 'type-to-reducer'
import { FETCH_USER_INFO_TYPE } from '../actions'
import type { User } from '../types'

type State = {
  isLoading: boolean,
  user: User,
  error: Object
}

const initialState: State = {
  isLoading: false,
  user: {
    id: null,
    login: '',
    avatar_url: '',
  },
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
      user: action.payload,
    }),
    REJECTED: (state, action): State => ({
      ...initialState,
      error: action.payload.error
    })
  }
}, initialState)

export { userInfo }
