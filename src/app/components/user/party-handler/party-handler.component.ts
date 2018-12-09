import { Component, OnInit } from "@angular/core"
import { SongService } from "../../../services/song/song.service"
import {
  PartyTotal,
  SongToShowO,
  FoodToShowO,
  ThemeToShowO,
  LocationToShowO
} from "../../../objects/partyTotal"
import { host_to_api } from "src/app/host"
import { FoodService } from "../../../services/food/food.service"
import { LocationService } from "../../../services/location/location.service"
import { ThemeService } from "../../../services/theme/theme.service"
import { StoreSService } from "../../../services/store/store-s.service"
import { PartyService } from "../../../services/party/party.service"

@Component({
  selector: "app-party-handler",
  templateUrl: "./party-handler.component.html",
  styleUrls: ["./party-handler.component.css"]
})
export class PartyHandlerComponent implements OnInit {
  partyTotal: PartyTotal = new PartyTotal()
  songData: Array<SongToShowO> = []
  privateTotal: number = 0
  foodData: Array<FoodToShowO> = []
  themeData: Array<ThemeToShowO> = []
  locationData: Array<LocationToShowO> = []
  keepIdUser = 0
  constructor(
    private songService: SongService,
    private foodS: FoodService,
    private locationS: LocationService,
    private themeS: ThemeService,
    private _store: StoreSService,
    private _partyS: PartyService
  ) {}

  ngOnInit() {
    this.userInit()
    this.songSetOnInit()
    this.foodSetOnInit()
    this.locationSetOnInit()
    this.themeSetOnInit()
  }
  userInit() {
    const admin = localStorage.getItem("admin")!!
    const user = localStorage.getItem("user")!!
    if (admin) {
      this.keepIdUser = JSON.parse(admin).data.id
    } else if (user) {
      this.keepIdUser = JSON.parse(user).data.id
    }
  }
  onChangeSong(song) {
    this.partyTotal.song = song
    this.totalCalToTotalPrice()
  }
  onChangeFood(food) {
    this.partyTotal.food = food
    this.totalCalToTotalPrice()
  }
  onChangeTheme(theme) {
    this.partyTotal.theme = theme
    this.totalCalToTotalPrice()
  }
  onChangeLocation(location) {
    this.partyTotal.location = location
    this.totalCalToTotalPrice()
  }
  saveThisParty() {
    alert(this.keepIdUser)
    this.partyTotal.id_user = this.keepIdUser
    const totalParty = this.totalPartyFunctionCall()
    if (totalParty && this.partyTotal.id_user) {
      this.partyTotal.start_time = +new Date(this.partyTotal.start_time)

      this._partyS.addNewParty(this.partyTotal).subscribe(
        data => {
          this.partyTotal = new PartyTotal()
          this._store.setHandlerMsg({
            message: data.message,
            show: true,
            status: data.status,
            class: "suc_msg"
          })
        },
        err => console.log(err)
      )
      // console.log(totalParty)
    } else {
      this._store.setHandlerMsg({
        class: "err_msg",
        message: "You must input every field .",
        show: true,
        status: 300
      })
    }
  }

  totalPartyFunctionCall() {
    const {
      food,
      theme,
      location,
      song,
      name_party,
      price_total,
      start_time
    } = this.partyTotal
    // this.partyTotal.

    if (
      !food.id_food ||
      !theme.id_theme ||
      !location.id_location ||
      !song.id_song ||
      !name_party ||
      !price_total ||
      !start_time
    ) {
      return false
    } else {
      return true
    }
  }

  totalCalToTotalPrice() {
    console.log(this.partyTotal)
    const { song, theme, location, food } = this.partyTotal
    this.privateTotal =
      song.price_song +
      theme.price_theme +
      location.price_location +
      food.price_food

    this.partyTotal.price_total = this.privateTotal
  }

  songSetOnInit() {
    this.songService.getListSong(0, 10).subscribe(
      data => {
        const songs = data.data
        this.songData = songs.map(data => {
          return {
            id_song: data.id,
            name_song: data.name_band,
            img_src: `${host_to_api}/public/${data.img_src}`,
            price_song: data.price_band
          }
        })
      },
      err => console.log(err)
    )
  }
  foodSetOnInit() {
    this.foodS.getListFoodPlace(0, 10).subscribe(
      data => {
        const foods = data.data
        this.foodData = foods.map(data => {
          return {
            id_food: data.id,
            name_food: data.name_food,
            img_food: `${host_to_api}/public/${data.img_food}`,
            price_food: data.price_food
          }
        })
      },
      err => console.log(err)
    )
    // this
  }
  locationSetOnInit() {
    this.locationS.getListLocation(0, 10).subscribe(
      data => {
        const locations = data.data
        this.locationData = locations.map(data => {
          return {
            id_location: data.id,
            name_location: data.name_location,
            img_location: `${host_to_api}/public/${data.img_location}`,
            price_location: data.price_location
          }
        })
      },
      err => console.log(err)
    )
  }
  themeSetOnInit() {
    this.themeS.getListOfTheme(0, 10).subscribe(
      data => {
        const themes = data.data
        this.themeData = themes.map(data => {
          return {
            id_theme: data.id,
            name_theme: data.name_theme,
            img_theme: `${host_to_api}/public/${data.img_theme}`,
            price_theme: data.price_theme
          }
        })
      },
      err => console.log(err)
    )
  }
}
