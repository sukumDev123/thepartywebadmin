import { Action } from "@ngrx/store"

export interface MsgInterFace {
  message: string
  status: number
  class: string
  show: boolean
}

export const ADD_MSG_VARI = "ADD MESSAGE TO STORE"

export class ADD_MSG_FUNC implements Action {
  readonly type = ADD_MSG_VARI
  constructor(public msg: MsgInterFace) {}
}

export type MSG_ACTION = ADD_MSG_FUNC
