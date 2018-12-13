import { combineReducers } from 'redux'

import { ActionsUnion } from '../../modules/action-utils'
import inputDialog, {
  actions as inputDialogActions
} from '../../modules/input-dialog'
import pageActions from './actions'
import people from './reducers'

export const actions = { ...pageActions, ...inputDialogActions }
export type AppAction = ActionsUnion<typeof actions>

const combinedReducers = combineReducers({ people, inputDialog })
export default combinedReducers
export type AppState = ReturnType<typeof combinedReducers>
