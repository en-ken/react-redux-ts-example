import { Dispatch } from 'redux'
import PeopleApi, { PersonalData } from '../../apis/people'
import { ActionsUnion, createAction } from '../../utils/actions'

export enum ActionType {
  FETCH_DATA = 'react-redux-ts-example-ts/FETCH_DATA',
  FETCH_DATA_SUCCESS = 'react-redux-ts-example-ts/FETCH_DATA_SUCCESS',
  POST_DATA = 'react-redux-ts-example-ts/POST_DATA',
  POST_DATA_SUCCESS = 'react-redux-ts-example-ts/POST_DATA_SUCCESS',
  OPEN_DIALOG = 'react-redux-ts-example-ts/OPEN_DIALOG',
  CLOSE_DIALOG = 'react-redux-ts-example-ts/CLOSE_DIALOG',
  START_LOADING = 'react-redux-ts-example-ts/START_LOADING',
  FINISH_LOADING = 'react-redux-ts-example-ts/FINISH_LOADING'
}

export type AppAction = ActionsUnion<typeof actions>

const actions = {
  fetchData: () => async (dispatch: Dispatch) => {
    dispatch(actions.startLoading())
    const { data } = await PeopleApi.get()
    dispatch(actions.fetchDataSuccess(data))
    dispatch(actions.finishLoading())
  },
  fetchDataSuccess: (data: PersonalData[]) =>
    createAction(ActionType.FETCH_DATA_SUCCESS, { data }),
  postData: (inputData: PersonalData) => async (dispatch: Dispatch) => {
    dispatch(actions.startLoading())
    await PeopleApi.post(inputData)
    const { data } = await PeopleApi.get()
    dispatch(actions.fetchDataSuccess(data))
    dispatch(actions.finishLoading())
  },
  openDialog: () => createAction(ActionType.OPEN_DIALOG),
  closeDialog: () => createAction(ActionType.CLOSE_DIALOG),
  startLoading: () => createAction(ActionType.START_LOADING),
  finishLoading: () => createAction(ActionType.FINISH_LOADING)
}

export default actions
