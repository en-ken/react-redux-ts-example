import { PersonalData } from '../../common/apis/people'
import { ActionType, AppAction } from './actions'

const reducer = (state: AppState = initState, action: AppAction): AppState => {
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
    case ActionType.OPEN_DIALOG:
      return {
        ...state,
        isOpenDialog: true
      }
    case ActionType.CLOSE_DIALOG:
      return {
        ...state,
        isOpenDialog: false
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
export default reducer

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
