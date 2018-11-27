import { Injectable } from "@angular/core"
import { Store } from "@ngrx/store"
import { ManagerReducer } from "../../store/index"
import { MsgInterFace } from "../../store/actions/handler-msg.action"
import * as handlerMsg from "../../store/actions/handler-msg.action"
import * as listA from "../../store/actions/list-object.action"
import { Observable } from "rxjs"
import {
  ListObject,
  ListObjectTotal
} from "../../store/actions/list-object.action"
@Injectable({
  providedIn: "root"
})
export class StoreSService {
  constructor(private _store: Store<ManagerReducer>) {}
  setHandlerMsg(msg: MsgInterFace) {
    this._store.dispatch({ type: handlerMsg.ADD_MSG_VARI, msg: msg })
  }
  getHandlerMsg(): Observable<MsgInterFace> {
    return this._store.select("handlerMsg")
  }
  setListObject(listObject: ListObjectTotal) {
    this._store.dispatch({ type: listA.ADD_LIST_VAR, listobject: listObject })
  }
  getListObject(): Observable<ListObjectTotal> {
    return this._store.select("listObject")
  }
}
