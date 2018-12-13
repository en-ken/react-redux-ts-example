import { PersonalData } from '../../apis/people'
import { ActionType, PageAction } from './actions'

const page = (state: PageState = initState, action: PageAction): PageState => {
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
export default page

export interface PageState {
  isLoaded: boolean
  data: PersonalData[]
}

const initState: PageState = {
  isLoaded: false,
  data: []
}
