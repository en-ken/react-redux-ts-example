import actionCreatorFactory from 'typescript-fsa'

import { PersonalData } from 'common/apis/people'
import { ActionsUnion } from './action-utils'

export enum ActionType {
  FETCH_DATA = 'example/redux-observable/FETCH_DATA',
  FETCH_DATA_SUCCESS = 'example/redux-observable/FETCH_DATA_SUCCESS',
  POST_DATA = 'example/redux-observable/POST_DATA',
  POST_DATA_SUCCESS = 'example/redux-observable/POST_DATA_SUCCESS',
  OPEN_DIALOG = 'example/redux-observable/OPEN_DIALOG',
  CLOSE_DIALOG = 'example/redux-observable/CLOSE_DIALOG',
  START_LOADING = 'example/redux-observable/START_LOADING',
  FINISH_LOADING = 'example/redux-observable/FINISH_LOADING'
}

export type AppAction = ActionsUnion<typeof actions>

const actionCreator = actionCreatorFactory()
const actions = {
  fetchData: actionCreator(ActionType.FETCH_DATA),
  fetchDataSuccess: actionCreator<{ data: PersonalData[] }>(
    ActionType.FETCH_DATA_SUCCESS
  ),
  postData: actionCreator<PersonalData>(ActionType.POST_DATA),
  postDataSuccess: actionCreator(ActionType.POST_DATA_SUCCESS),
  openDialog: actionCreator(ActionType.OPEN_DIALOG),
  closeDialog: actionCreator(ActionType.CLOSE_DIALOG)
}

export default actions
