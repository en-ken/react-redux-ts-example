import { combineReducers } from 'redux'

import { ActionsUnion } from '../../common/modules/action-utils'
import inputDialog, {
  actions as inputDialogActions
} from '../../common/modules/input-dialog'
import pageActions from './actions'
import people from './reducers'

export const actions = { ...pageActions, ...inputDialogActions }
export type AppAction = ActionsUnion<typeof actions>

const combinedReducers = combineReducers({ people, inputDialog })
export default combinedReducers
export type AppState = ReturnType<typeof combinedReducers>
