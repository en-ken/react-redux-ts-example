import { Dispatch } from 'redux'
import PeopleApi, { PersonalData } from '../../common/apis/people'
import { ActionsUnion, createAction } from '../../common/modules/action-utils'

export enum ActionType {
  FETCH_DATA = 'example/redux-thunk/FETCH_DATA',
  FETCH_DATA_SUCCESS = 'example/redux-thunk/FETCH_DATA_SUCCESS',
  POST_DATA = 'example/redux-thunk/POST_DATA',
  POST_DATA_SUCCESS = 'example/redux-thunk/POST_DATA_SUCCESS',
  START_LOADING = 'example/redux-thunk/START_LOADING',
  FINISH_LOADING = 'example/redux-thunk/FINISH_LOADING'
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
  startLoading: () => createAction(ActionType.START_LOADING),
  finishLoading: () => createAction(ActionType.FINISH_LOADING)
}

export default actions
