import { Dispatch } from 'redux'
import PeopleApi, { PersonalData } from '../../apis/people'
import { ActionsUnion, createAction } from '../../utils/actions'

export enum ActionType {
  FETCH_DATA_SUCCESS = 'react-redux-ts-example-ts/FETCH_DATA_SUCCESS',
  OPEN_DIALOG = 'react-redux-ts-example-ts/OPEN_DIALOG',
  CLOSE_DIALOG = 'react-redux-ts-example-ts/CLOSE_DIALOG',
  START_LOADING = 'react-redux-ts-example-ts/START_LOADING',
  FINISH_LOADING = 'react-redux-ts-example-ts/FINISH_LOADING'
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
