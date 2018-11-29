import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  public adminIs = JSON.parse(localStorage.getItem("admin")).data
  constructor(private router: Router) {}

  ngOnInit() {
    // console.log(this.adminIs)
  }
  logout() {
    localStorage.removeItem("admin")
    this.router.navigate(["/signin"])
  }
}
