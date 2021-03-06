import { Injectable } from "@angular/core"
import { CanActivate, Router } from "@angular/router"

@Injectable({
  providedIn: "root"
})
export class NotSignGuard implements CanActivate {
  constructor(private _router: Router) {}
  isLogin() {
    return JSON.parse(localStorage.getItem("admin"))!!
  }
  UserData() {
    return JSON.parse(localStorage.getItem("admin")).data
  }
  canActivate(): boolean {
    if (this.isLogin()) {
      console.log(this.UserData())
      if (this.UserData().roles === 0 || this.UserData().roles === 1) {
        const role = this.UserData().roles
        const routTo = role ? "admin/tolist" : "user/history"
        this._router.navigate([`/${routTo}`])

        return false
      } else {
        return false
      }
    } else {
      return true
    }
  }
}
