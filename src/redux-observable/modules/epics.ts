import { combineEpics, Epic } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'

import { ofAction } from 'typescript-fsa-redux-observable-of-action'

import PeopleApi from '../../apis/people'
import actions, { AppAction } from './actions'

const fetchDataEpic: Epic<AppAction> = action$ =>
  action$.pipe(
    ofAction(actions.fetchData),
    mergeMap(async () => {
      const { data } = await PeopleApi.get()
      return actions.fetchDataSuccess({ data })
    })
  )

const postDataEpic: Epic<AppAction> = action$ =>
  action$.pipe(
    ofAction(actions.postData),
    mergeMap(async action => {
      await PeopleApi.post(action.payload)
      const { data } = await PeopleApi.get()
      return actions.fetchDataSuccess({ data })
    })
  )

const epics = combineEpics(fetchDataEpic, postDataEpic)
export default epics
