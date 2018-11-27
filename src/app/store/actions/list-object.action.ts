import { Action } from "@ngrx/store"

export interface ListObject {
  name: string
  detail: string
  img: string
  price: 0
}
export interface ListObjectTotal {
  data: Array<ListObject>
  size: number
}
export const ADD_LIST_VAR = "ADD LIST OHTER TO STORE"
export class ADD_LIST_FUNCTION implements Action {
  readonly type = ADD_LIST_VAR
  constructor(public listobject: ListObjectTotal) {}
}
export type LIST_ACTIONS = ADD_LIST_FUNCTION
