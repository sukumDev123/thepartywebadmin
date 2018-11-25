import * as handleraction from "../actions/handler-msg.action"
import { MsgInterFace } from "../actions/handler-msg.action"
export const handlercon: handleraction.MsgInterFace = {
  class: "",
  message: "",
  show: false,
  status: 0
}
export const handlerMsgReducer = (
  state: handleraction.MsgInterFace = handlercon,
  action: handleraction.MSG_ACTION
): MsgInterFace => {
  switch (action.type) {
    case handleraction.ADD_MSG_VARI: {
      return {
        class: action.msg.class,
        message: action.msg.message,
        show: action.msg.show,
        status: action.msg.status
      }
    }
    default:
      return state
  }
}
