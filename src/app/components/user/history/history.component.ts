import { Component, OnInit } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { host_to_api } from "../../../host"
import { Observable } from "rxjs"
import { PartyService } from "../../../services/party/party.service"

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  // private host = host_to_api
  historyParty = []
  constructor(private partyS: PartyService) {}

  ngOnInit() {
    const admin = localStorage.getItem("admin")!!
    const user = localStorage.getItem("user")!!
    if (admin) {
      const admin_id = JSON.parse(admin).data.id
      this.partyS.getListOfHistory(0, 5, admin_id).subscribe(
        data => {
          // console.log(data)
          this.historyParty = data.data.map(data => {
            return {
              name_party: data.name_party,
              price_total: data.price_total,
              start_time: new Date(parseInt(data.start_time))
            }
          })
        },
        err => console.log(err)
      )
    } else if (user) {
      const user_id = JSON.parse(user).data.id
      this.partyS.getListOfHistory(0, 5, user_id).subscribe(
        data => {
          // console.log(data)
          this.historyParty = data.data
        },
        err => console.log(err)
      )
    }
  }
}
