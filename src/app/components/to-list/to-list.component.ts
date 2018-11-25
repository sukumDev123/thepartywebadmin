import { Component, OnInit } from "@angular/core"
import { StoreSService } from "../../services/store/store-s.service"
import { listObject } from "../../store/reducers/list-object.reducer"

@Component({
  selector: "app-to-list",
  templateUrl: "./to-list.component.html",
  styleUrls: ["./to-list.component.css"]
})
export class ToListComponent implements OnInit {
  constructor(private listObject: StoreSService) {}
  listObjectTo: Array<any> = []
  ngOnInit() {
    this.listObject
      .getListObject()
      .subscribe(this.handlerObjectSuc, this.handlerObjectErr)
  }
  handlerObjectSuc(data) {
    console.log(data)
    this.listObjectTo = data
  }
  handlerObjectErr(err) {
    console.log(err)
  }
}
