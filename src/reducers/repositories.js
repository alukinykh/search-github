// @flow

import typeToReducer from 'type-to-reducer'
import { FETCH_REPOSITORY_LIST } from '../actions'
import type { Repository } from '../types'

type State = {
  isLoading: boolean,
  repositories: Repository[],
  error: Object
}

const initialState: State = {
  isLoading: false,
  repositories: [],
  error: {}
}

const repositories = typeToReducer({
  [FETCH_REPOSITORY_LIST]: {
    PENDING: (): State => ({
      ...initialState,
      isLoading: true
    }),
    FULFILLED: (state, action): State => ({
      ...initialState,
      repositories: action.payload
    }),
    REJECTED: (state, action): State => ({
      ...initialState,
      error: action.payload.error
    })
  }
}, initialState)

export { repositories }
