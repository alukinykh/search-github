// @flow

import { DETAIL_REPOSITORY, TABLE_REPOSITORY } from '../actions'
import type { DetailsModeAction, DetailsModeState } from '../types'


export const detailsMode = (state: DetailsModeState = { show: false }, action: DetailsModeAction) => {
  switch (action.type) {
    case DETAIL_REPOSITORY:
      return { ...state, show: action.detailsMode }
    case TABLE_REPOSITORY:
      return { ...state, show: action.detailsMode }
    default:
      return state
  }
}
