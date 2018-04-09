import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { userInfo } from './user'
import { detailsMode } from './detailsMode'
import { commitList } from './commits'
import { repositories } from './repositories'

export default combineReducers({
  repositories,
  userInfo,
  commitList,
  detailsMode,
  form: formReducer
})
