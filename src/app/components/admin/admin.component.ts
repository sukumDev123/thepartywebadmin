import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  public adminIs = JSON.parse(localStorage.getItem("admin")).data
  constructor() {}

  ngOnInit() {
    // console.log(this.adminIs)
  }
  logout() {
    localStorage.removeItem("admin")
  }
}
