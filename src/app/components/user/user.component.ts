import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user = {
    displayName: ""
  };
  constructor(private router: Router) {}

  ngOnInit() {
    const dataUser = JSON.parse(localStorage.getItem("admin"));
    if (dataUser) this.user.displayName = dataUser.data.displayName;
    else {
      this.router.navigate(["/signin"]);
    }
  }
  logout() {
    localStorage.removeItem("admin");
    this.router.navigate(["/signin"]);
  }
}
