import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { PersonalData } from '../../common/apis/people'
import actions from './actions'

export interface PageState {
  isLoaded: boolean
  data: PersonalData[]
}

const initState: PageState = {
  isLoaded: false,
  data: []
}

const page = reducerWithInitialState(initState)
  .case(actions.fetchData, state => ({ ...state, isLoaded: false }))
  .case(actions.fetchDataSuccess, (state, payload) => ({
    ...state,
    isLoaded: true,
    data: payload.data
  }))
  .case(actions.postData, state => ({ ...state, isLoaded: false }))
export default page
