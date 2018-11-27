import * as lObject from "../actions/list-object.action"
import { ListObject, ListObjectTotal } from "../actions/list-object.action"

export const listObject: ListObjectTotal = {
  data: [],
  size: 0
}
export const listObjectReducer = (
  status = listObject,
  action: lObject.LIST_ACTIONS
): ListObjectTotal => {
  switch (action.type) {
    case lObject.ADD_LIST_VAR: {
      return action.listobject
    }
    default:
      return status
  }
}
