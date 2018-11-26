import { Component, OnInit } from "@angular/core"

import { SongService } from "../../services/song/song.service"
import { ListObject } from "../../objects/song.object"
import { host_to_api } from "../../host"
import { StoreSService } from "../../services/store/store-s.service"

@Component({
  selector: "app-to-list",
  templateUrl: "./to-list.component.html",
  styleUrls: ["./to-list.component.css"]
})
export class ToListComponent implements OnInit {
  constructor(
    private songObjects: SongService,
    private listObject: StoreSService
  ) {}
  listObjectTo: Array<any> = []
  private host = host_to_api
  ngOnInit() {
    this.listObject
      .getListObject()
      .subscribe(data => this.handlerObjectSuc(data), this.handlerObjectErr)
  }
  handlerObjectSuc(listObjects: Array<any>) {
    if (listObjects.length) {
      this.listObjectTo = listObjects.map(d => {
        const name = d.name_band ? d.name_band : "Name is empty."
        const price = d.price_band
        const detail = d.detail_band
        const img_path = `${this.host}/public/${d.img_src}`
        return new ListObject(name, price, detail, img_path)
      })
    } else {
      this.listObjectTo = []
    }
  }
  handlerObjectErr(err) {
    console.log(err)
  }
  handlerErrMes(e) {
    const message = e.error.message
    this.listObject.setHandlerMsg({
      message: message,
      class: "err_msg",
      show: true,
      status: e.status
    })
  }
  toListOfSong() {
    this.songObjects
      .getListSong(0, 1)
      .subscribe(
        songs => this.listObject.setListObject(songs.data),
        error => this.handlerErrMes(error)
      )
  }
}
