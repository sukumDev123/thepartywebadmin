import { handlerMsgReducer } from "./reducers/handler-msg.reducer"
import { MsgInterFace } from "./actions/handler-msg.action"
import { ActionReducerMap } from "@ngrx/store"

export interface ManagerReducer {
  handlerMsg: MsgInterFace
}
export const reducer: ActionReducerMap<ManagerReducer> = {
  handlerMsg: handlerMsgReducer
}
