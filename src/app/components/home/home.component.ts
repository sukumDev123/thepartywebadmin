import { Component, OnInit } from "@angular/core"
import { LocationService } from "../../services/location/location.service"
import { SongService } from "../../services/song/song.service"
import { ThemeService } from "../../services/theme/theme.service"
import { FoodService } from "../../services/food/food.service"
import { host_to_api } from "src/app/host"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  locationData = []
  songData = []
  themeData = []
  foodsData = []

  constructor(
    private locationS: LocationService,
    private songS: SongService,
    private themeS: ThemeService,
    private foodS: FoodService
  ) {}

  ngOnInit() {
    this.locationS
      .getListLocation(0, 5)
      .subscribe(data => (this.locationData = data.data))
    this.songS
      .getListSong(0, 5)
      .subscribe(data => this.handlerDataListSong(data))
    this.themeS.getListOfTheme(0, 5).subscribe(data => (this.themeData = data))
    this.foodS.getListFoodPlace(0, 5).subscribe(data => (this.foodsData = data))
  }
  handlerDataListSong(data) {
    this.songData = data.data.map(
      song => `${host_to_api}/public/${song.img_src}`
    )
    console.log(this.songData)
  }
  handlerDataListFood(data) {
    this.locationData = data.data.map(
      food => `${host_to_api}/public/${food.img_food}`
    )
  }
}
