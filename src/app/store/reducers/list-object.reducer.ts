import * as lObject from "../actions/list-object.action"
import { ListObject } from "../actions/list-object.action"

export const listObject: Array<ListObject> = []
export const listObjectReducer = (
  status = listObject,
  action: lObject.LIST_ACTIONS
): Array<ListObject> => {
  switch (action.type) {
    case lObject.ADD_LIST_VAR: {
      return action.listobject
    }
    default:
      return status
  }
}
