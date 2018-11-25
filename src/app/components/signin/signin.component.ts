import { Component, OnInit } from "@angular/core"
import { AuthInterFace } from "../../interfaces/auth.interface"
import { AuthService } from "../../services/auth/auth.service"
import { Router } from "@angular/router"

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
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}
  signIn() {
    this.auth.loginAuthToAdmin(this.authInfo).subscribe(
      data => {
        localStorage.setItem("admin", JSON.stringify(data))
        this.router.navigate(["/admin/food"])
      },
      err => {
        console.log(err)
      }
    )
  }
}
