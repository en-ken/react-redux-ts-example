import { Dispatch } from 'redux'
import { ActionsUnion, createAction } from './action-utils'

import { PersonalData } from '../apis/people'

export enum ActionType {
  INPUT_NAME = 'example/input-dialog/INPUT_NAME',
  INPUT_HEIGHT = 'example/input-dialog/INPUT_HEIGHT',
  INPUT_WEIGHT = 'example/input-dialog/INPUT_WEIGHT',
  REFRESH = 'example/input-dialog/REFRESH',
  OPEN_DIALOG = 'example/input-dialog/OPEN_DIALOG',
  CLOSE_DIALOG = 'example/input-dialog/CLOSE_DIALOG'
}

export type InputDialogAction = ActionsUnion<typeof actions>

export const actions = {
  inputName: (name: string) => createAction(ActionType.INPUT_NAME, { name }),
  inputHeight: (height: number) =>
    createAction(ActionType.INPUT_HEIGHT, { height }),
  inputWeight: (weight: number) =>
    createAction(ActionType.INPUT_WEIGHT, { weight }),
  refresh: () => createAction(ActionType.REFRESH),
  closeDialog: () => createAction(ActionType.CLOSE_DIALOG),
  openDialog: () => createAction(ActionType.OPEN_DIALOG)
}

const reducer = (
  state: InputDialogState = initState,
  action: InputDialogAction
): InputDialogState => {
  switch (action.type) {
    case ActionType.INPUT_NAME:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          name: action.payload.name
        }
      }
    case ActionType.INPUT_HEIGHT:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          height: action.payload.height
        }
      }
    case ActionType.INPUT_WEIGHT:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          weight: action.payload.weight
        }
      }
    case ActionType.REFRESH:
      return initState
    case ActionType.OPEN_DIALOG:
      return {
        ...state,
        isOpen: true
      }
    case ActionType.CLOSE_DIALOG:
      return {
        ...state,
        isOpen: false
      }
  }
}
export default reducer

export interface InputDialogState {
  inputData: PersonalData
  isOpen: boolean
}

const initState: InputDialogState = {
  inputData: {
    name: '',
    height: 0,
    weight: 0
  },
  isOpen: false
}
