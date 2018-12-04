import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { host_to_api } from "../../host"
import { AuthInterFace, AuthCallBack } from "../../interfaces/auth.interface"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private host = host_to_api
  constructor(private _http: HttpClient) {}

  loginAuthToAdmin(authData: AuthInterFace): Observable<AuthCallBack> {
    return this._http.post<any>(
      `${this.host}/api/v1/user/loginFunction?roles=admin`,
      authData
    )
  }
  changeUser() {
    const admin = localStorage.getItem("admin")!!
    const user = localStorage.getItem("user")!!
    if (admin) {
      return JSON.parse(admin).data.id
    } else if (user) {
      return JSON.parse(user).data.id
    }
  }
}
