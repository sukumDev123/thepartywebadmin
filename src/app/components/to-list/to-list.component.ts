import { Component, OnInit } from "@angular/core"

import { SongService } from "../../services/song/song.service"
import { ListObject } from "../../objects/song.object"
import { host_to_api } from "../../host"
import { StoreSService } from "../../services/store/store-s.service"
import { MsgInterFace } from "../../store/actions/handler-msg.action"
import { LocationService } from "../../services/location/location.service"
import { FoodService } from "../../services/food/food.service"
import { ThemeService } from "../../services/theme/theme.service"
import { ListObjectTotal } from "../../store/actions/list-object.action"
import { PageScroll } from "./page-scroll"

@Component({
  selector: "app-to-list",
  templateUrl: "./to-list.component.html",
  styleUrls: ["./to-list.component.css"]
})
export class ToListComponent implements OnInit {
  constructor(
    private songObjects: SongService,
    private listObject: StoreSService,
    private locationObjects: LocationService,
    private foodObjects: FoodService,
    private themeObject: ThemeService
  ) {}
  listObjectTo: Array<any> = []
  private host = host_to_api
  sizeOfList: number = 0
  paginatioView = []
  typeOfList = ""
  ngOnInit() {
    this.listObject
      .getListObject()
      .subscribe(data => this.handlerObjectSuc(data), this.handlerObjectErr)
  }
  deleteListOfSong(list, type) {
    if (type === "song") this.songDelete(list)
    if (type === "location") this.locationDelete(list)
    if (type === "food") this.foodDelete(list)
    if (type === "theme") this.themeDelete(list)
  }
  pageChangeView(tpye, start, stop) {
    const startTox = start == 1 ? 0 : start - 1
    const endTox = start == 1 ? 2 : start - 1
    start = startTox * 3
    stop = stop + endTox
    if (tpye === "song") this.toListOfSong(start, stop)
  }

  themeDelete(theme) {
    const id = theme.id
    this.themeObject.deleteOfTheme(id).subscribe(
      deleted => {
        this.listObjectTo.splice(this.listObjectTo.indexOf(theme), 1)

        this.handlerMessageSuc(deleted)
      },
      e => this.handlerErrMes(e)
    )
  }
  foodDelete(food) {
    const id = food.id
    this.foodObjects.deleteFoodPlace(id).subscribe(
      deleted => {
        this.listObjectTo.splice(this.listObjectTo.indexOf(food), 1)
        this.handlerMessageSuc(deleted)
      },
      e => this.handlerErrMes(e)
    )
  }
  locationDelete(location) {
    const id = location.id
    this.locationObjects.deleteLocation(id).subscribe(
      deleted => {
        this.listObjectTo.splice(this.listObjectTo.indexOf(location), 1)
        this.handlerMessageSuc(deleted)
      },
      e => this.handlerErrMes(e)
    )
  }
  handlerObjectSuc(listObjects: ListObjectTotal) {
    if (listObjects.data.length) {
      this.listObjectTo = listObjects.data
      this.sizeOfList = listObjects.size
      const page = new PageScroll()
      const paged = page.totalPageNum(this.sizeOfList, 3)
      const hh = page.paginatiofScroll(1, paged)
      this.paginatioView = hh
      // this.sizeOfList
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
  handlerMessageSuc(suc) {
    this.listObject.setHandlerMsg({
      message: suc.message,
      class: "suc_msg",
      show: true,
      status: suc.status
    })
  }
  toListOfSong(start = 0, end = 3) {
    this.songObjects.getListSong(start, end).subscribe(
      songs => {
        this.handlerMessageSuc(songs)
        const songData = songs.data.map(d => {
          const name = d.name_band ? d.name_band : "Name is empty."
          const price = d.price_band
          const detail = d.detail_band
          const img_path = `${this.host}/public/${d.img_src}`
          const type = "song"
          const id = d.id
          this.typeOfList = type
          return new ListObject(name, price, detail, img_path, type, id)
        })
        this.listObject.setListObject({ data: songData, size: songs.size })
      },
      error => this.handlerErrMes(error)
    )
  }
  toListOfLocation(start = 0, end = 3) {
    this.locationObjects.getListLocation(start, end).subscribe(
      locations => {
        this.handlerMessageSuc(locations)
        const name_location = locations.data.map(location => {
          const name = location.name_location
          const detail = location.detail_location
          const img = `${host_to_api}/public/${location.img_location}`
          const price = location.price_location
          const id = location.id
          const type = "location"
          this.typeOfList = type

          return new ListObject(name, price, detail, img, type, id)
        })
        this.listObject.setListObject({
          data: name_location,
          size: locations.size
        })
      },
      e => this.handlerErrMes(e)
    )
  }
  toListOfFood(start = 0, end = 3) {
    this.foodObjects.getListFoodPlace(start, end).subscribe(
      foods => {
        this.handlerMessageSuc(foods)
        const food_changed = foods.data.map(food => {
          const name = food.name_food
          const detail = food.detail_food
          const img = `${host_to_api}/public/${food.img_food}`
          const price = food.price_food
          const id = food.id
          const type = "food"
          this.typeOfList = type

          return new ListObject(name, price, detail, img, type, id)
        })
        this.listObject.setListObject({ data: food_changed, size: foods.size })
      },
      e => this.handlerErrMes(e)
    )
  }
  toListOfTheme(start = 0, end = 3) {
    this.themeObject.getListOfTheme(start, end).subscribe(
      themes => {
        this.handlerMessageSuc(themes)
        const theme_changed = themes.data.map(theme => {
          const name = theme.name_theme
          const detail = theme.detail_theme
          const img = `${host_to_api}/public/${theme.img_theme}`
          const price = theme.price_theme
          const id = theme.id
          const type = "theme"
          this.typeOfList = type

          return new ListObject(name, price, detail, img, type, id)
        })
        this.listObject.setListObject(theme_changed)
      },
      e => this.handlerErrMes(e)
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
