import { Injectable } from "@angular/core"
import { Store } from "@ngrx/store"
import { ManagerReducer } from "../../store/index"
import { MsgInterFace } from "../../store/actions/handler-msg.action"
import * as handlerMsg from ".././../store/actions/handler-msg.action"
import { Observable } from "rxjs"
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
}
