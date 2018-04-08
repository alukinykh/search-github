// @flow

import typeToReducer from 'type-to-reducer'
import { FETCH_COMMITS_LIST } from '../actions'

const initialState = {
  isLoading: false,
  commits: [],
  error: {}
}

const commitList = typeToReducer({
  [FETCH_COMMITS_LIST]: {
    PENDING: () => ({
      ...initialState,
      isLoading: true
    }),
    FULFILLED: (state, action) => ({
      ...initialState,
      commits: action.payload
    }),
    REJECTED: (state, action) => ({
      ...initialState,
      error: action.payload.error
    })
  }
}, initialState)

export { commitList }
