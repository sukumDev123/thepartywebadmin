import { Component, OnInit } from "@angular/core"
import { SongService } from "../../../services/song/song.service"
import {
  PartyTotal,
  SongToShowO,
  FoodToShowO
} from "../../../objects/partyTotal"
import { host_to_api } from "src/app/host"
import { FoodService } from "../../../services/food/food.service"

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
  constructor(private songService: SongService, private foodS: FoodService) {}

  ngOnInit() {
    this.songSetOnInit()
  }

  onChangeSong(song) {
    this.partyTotal.song = song
    this.totalCalToTotalPrice()
  }
  totalCalToTotalPrice() {
    const { song, theme, location, food } = this.partyTotal
    this.privateTotal =
      song.price_song +
      theme.price_theme +
      location.price_location +
      food.price_food
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
        console.log(this.partyTotal.song)
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
}
