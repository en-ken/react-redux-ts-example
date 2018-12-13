import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'
import { Action, ActionCreator, AnyAction, isType } from 'typescript-fsa'

export const ofAction = <P>(actionCreator: ActionCreator<P>) => (
  source: Observable<AnyAction>
) =>
  source.pipe(filter(action => isType(action, actionCreator))) as Observable<
    Action<P>
  >
