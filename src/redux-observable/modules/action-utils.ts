export type ActionsUnion<
  A extends {
    [actionCreator: string]: (...args: any[]) => any
  }
> = Exclude<ReturnType<A[keyof A]>, (...args: any[]) => Promise<void>>
