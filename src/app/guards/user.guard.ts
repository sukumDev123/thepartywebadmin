import { Injectable } from "@angular/core"
import { CanActivate, Router } from "@angular/router"

@Injectable({
  providedIn: "root"
})
export class UserGuard implements CanActivate {
  constructor(private _router: Router) {}
  isLogin() {
    return JSON.parse(localStorage.getItem("admin"))!!
  }
  UserData() {
    return JSON.parse(localStorage.getItem("admin")).data
  }
  canActivate(): boolean {
    if (this.isLogin()) {
      if (this.UserData().roles === 1 && this.UserData().roles === 0) {
        return true
      } else {
        this._router.navigate(["/signin"])
        return false
      }
    } else {
      this._router.navigate(["/signin"])
      return false
    }
  }
}
