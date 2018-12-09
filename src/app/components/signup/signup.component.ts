import { Component, OnInit } from "@angular/core"
import { AuthService } from "src/app/services/auth/auth.service"
import { StoreSService } from "src/app/services/store/store-s.service"
import { Router } from "@angular/router"

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  authInfo = {
    displayName: "",
    email: "",
    password: ""
  }
  constructor(
    private auth: AuthService,
    private store: StoreSService,
    private _router: Router
  ) {}

  ngOnInit() {}
  signUp() {
    this.auth.signUpAuth(this.authInfo).subscribe(
      data => {
        this.store.setHandlerMsg({
          class: "suc_msg",
          message: data.message,
          show: true,
          status: data.status
        })
        this._router.navigate(["/core/signin"])
      },
      err => {
        this.store.setHandlerMsg({
          class: "suc_msg",
          message: err.error.message,
          show: true,
          status: err.status
        })
      }
    )
  }
}
