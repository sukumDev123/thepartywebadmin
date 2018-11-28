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
      if (this.UserData().roles === 0 || this.UserData().roles === 1) {
        const role = this.UserData().roles
        const routTo = role ? "admin" : "user"
        this._router.navigate([`/${routTo}`])

        return true
      } else {
        return true
      }
    } else {
      // this._router.navigate(["/signin"])
      return true
    }
  }
}
