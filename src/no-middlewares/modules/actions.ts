import { Dispatch } from 'redux'
import PeopleApi, { PersonalData } from '../../apis/people'
import { ActionsUnion, createAction } from './action-utils'

export enum ActionType {
  FETCH_DATA_SUCCESS = 'example/no-middleware/FETCH_DATA_SUCCESS',
  OPEN_DIALOG = 'example/no-middlewares/OPEN_DIALOG',
  CLOSE_DIALOG = 'example/no-middlewares/CLOSE_DIALOG',
  START_LOADING = 'example/no-middlewares/START_LOADING',
  FINISH_LOADING = 'example/no-middlewares/FINISH_LOADING'
}

export type AppAction = ActionsUnion<typeof actions>

const actions = {
  fetchDataSuccess: (data: PersonalData[]) =>
    createAction(ActionType.FETCH_DATA_SUCCESS, { data }),
  closeDialog: () => createAction(ActionType.CLOSE_DIALOG),
  openDialog: () => createAction(ActionType.OPEN_DIALOG),
  startLoading: () => createAction(ActionType.START_LOADING),
  finishLoading: () => createAction(ActionType.FINISH_LOADING)
}

export default actions
