import { PersonalData } from '../../common/apis/people'
import { ActionType, AppAction } from './actions'

const personalData = (
  state: AppState = initState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case ActionType.START_LOADING:
      return {
        ...state,
        isLoaded: false
      }
    case ActionType.FINISH_LOADING:
      return {
        ...state,
        isLoaded: true
      }
    case ActionType.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      }
    default:
      return state
  }
}
export default personalData

export interface AppState {
  isLoaded: boolean
  data: PersonalData[]
}

const initState: AppState = {
  isLoaded: false,
  data: []
}
