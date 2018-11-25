import { handlerMsgReducer } from "./reducers/handler-msg.reducer"
import { MsgInterFace } from "./actions/handler-msg.action"
import { ActionReducerMap } from "@ngrx/store"
import { listObjectReducer } from "./reducers/list-object.reducer"
import { ListObject } from "./actions/list-object.action"

export interface ManagerReducer {
  handlerMsg: MsgInterFace
  listObject: Array<ListObject>
}
export const reducer: ActionReducerMap<ManagerReducer> = {
  handlerMsg: handlerMsgReducer,
  listObject: listObjectReducer
}
