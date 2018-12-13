export interface Action<Type extends string> {
  type: Type
}

export interface ActionWithPayload<Type extends string, Payload> {
  type: Type
  payload: Payload
}

export function createAction<Type extends string>(type: Type): Action<Type>
export function createAction<Type extends string, Payload>(
  type: Type,
  payload: Payload
): ActionWithPayload<Type, Payload>
export function createAction<Type, Payload>(type: Type, payload?: Payload) {
  return payload === undefined ? { type } : { type, payload }
}

export type ActionsUnion<
  A extends {
    [actionCreator: string]: (...args: any[]) => any
  }
> = Exclude<ReturnType<A[keyof A]>, (...args: any[]) => Promise<void>>
