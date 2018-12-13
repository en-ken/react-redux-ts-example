import { combineEpics, Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { map, mergeMap, mergeMapTo } from 'rxjs/operators'

import { ofAction } from './typescript-fsa-redux-observable-of-action'

import PeopleApi from '../apis/people'
import { actions, AppAction } from './modules'

const fetchDataEpic: Epic<AppAction> = action$ =>
  action$.pipe(
    ofAction(actions.fetchData),
    mergeMap(() =>
      from(PeopleApi.get()).pipe(
        map(({ data }) => actions.fetchDataSuccess({ data }))
      )
    )
  )

const postDataEpic: Epic<AppAction> = action$ =>
  action$.pipe(
    ofAction(actions.postData),
    mergeMap(action =>
      from(PeopleApi.post(action.payload)).pipe(
        mergeMapTo([actions.closeDialog(), actions.fetchData()])
      )
    )
  )

export default combineEpics(fetchDataEpic, postDataEpic)
