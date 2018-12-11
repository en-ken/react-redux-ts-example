import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { PersonalData } from '../../apis/people'
import actions from './actions'

export interface AppState {
  isLoaded: boolean
  isOpenDialog: boolean
  data: PersonalData[]
}

const initState: AppState = {
  isLoaded: false,
  isOpenDialog: false,
  data: []
}

const personalData = reducerWithInitialState(initState)
  .case(actions.openDialog, state => ({ ...state, isOpenDialog: true }))
  .case(actions.closeDialog, state => ({ ...state, isOpenDialog: false }))
  .case(actions.fetchData, state => ({ ...state, isLoaded: false }))
  .case(actions.fetchDataSuccess, (state, payload) => ({
    ...state,
    isLoaded: true,
    data: payload.data
  }))
  .case(actions.postData, state => ({ ...state, isLoaded: false }))
export default personalData
