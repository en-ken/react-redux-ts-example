import { Dispatch } from 'redux'
import PeopleApi, { PersonalData } from '../../apis/people'
import { ActionsUnion, createAction } from '../../modules/action-utils'

export enum ActionType {
  FETCH_DATA_SUCCESS = 'example/no-middleware/FETCH_DATA_SUCCESS',
  START_LOADING = 'example/no-middlewares/START_LOADING',
  FINISH_LOADING = 'example/no-middlewares/FINISH_LOADING'
}

export type PageAction = ActionsUnion<typeof actions>

const actions = {
  fetchDataSuccess: (data: PersonalData[]) =>
    createAction(ActionType.FETCH_DATA_SUCCESS, { data }),
  startLoading: () => createAction(ActionType.START_LOADING),
  finishLoading: () => createAction(ActionType.FINISH_LOADING)
}

export default actions
