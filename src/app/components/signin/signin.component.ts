import { Component, OnInit } from "@angular/core"
import { AuthInterFace } from "../../interfaces/auth.interface"
import { AuthService } from "../../services/auth/auth.service"
import { Router } from "@angular/router"
import { StoreSService } from "../../services/store/store-s.service"

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  authInfo: AuthInterFace = {
    email: "",
    password: ""
  }
  constructor(
    private auth: AuthService,
    private router: Router,
    private storeHandler: StoreSService
  ) {}

  ngOnInit() {}
  signIn() {
    this.auth.loginAuthToAdmin(this.authInfo).subscribe(
      data => {
        localStorage.setItem("admin", JSON.stringify(data))
        this.router.navigate(["/admin/food"])
      },
      err => {
        // console.log(err)
        const message = err.error.message
        this.storeHandler.setHandlerMsg({
          class: "err_msg",
          message: message,
          show: true,
          status: err.error.status ? err.error.status : err.status
        })
      }
    )
  }
}
