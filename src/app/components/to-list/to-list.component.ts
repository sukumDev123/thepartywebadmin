import { Component, OnInit } from "@angular/core"

import { SongService } from "../../services/song/song.service"
import { ListObject } from "../../objects/song.object"
import { host_to_api } from "../../host"
import { StoreSService } from "../../services/store/store-s.service"
import { MsgInterFace } from "../../store/actions/handler-msg.action"

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
  deleteListOfSong(list, type) {
    if (type === "song") this.songDelete(list)
  }

  handlerObjectSuc(listObjects: Array<any>) {
    if (listObjects.length) {
      this.listObjectTo = listObjects
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
      status: e.error.status ? e.error.status : e.status
    })
  }
  toListOfSong() {
    this.songObjects.getListSong(0, 10).subscribe(
      songs => {
        const songData = songs.data.map(d => {
          const name = d.name_band ? d.name_band : "Name is empty."
          const price = d.price_band
          const detail = d.detail_band
          const img_path = `${this.host}/public/${d.img_src}`
          const type = "song"
          const id = d.id
          return new ListObject(name, price, detail, img_path, type, id)
        })
        this.listObject.setListObject(songData)
      },
      error => this.handlerErrMes(error)
    )
  }
  songDelete(list) {
    const id_song = list.id
    this.songObjects.deleteSong(id_song).subscribe(
      d => {
        const msg: MsgInterFace = {
          message: d.message,
          class: "suc_msg",
          show: true,
          status: d.status
        }
        this.listObjectTo.splice(this.listObjectTo.indexOf(list), 1)
        this.listObject.setHandlerMsg(msg)
      },
      e => this.handlerErrMes(e)
    )
  }
}
