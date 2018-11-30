import { Component, OnInit } from "@angular/core"
import { LocationService } from "../../services/location/location.service"
import { SongService } from "../../services/song/song.service"
import { ThemeService } from "../../services/theme/theme.service"
import { FoodService } from "../../services/food/food.service"
import { host_to_api } from "src/app/host"
import { Router } from "@angular/router"

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
    private foodS: FoodService,
    private router: Router
  ) {}

  ngOnInit() {
    this.locationS
      .getListLocation(0, 3)
      .subscribe(data => this.handlerDataLocation(data))
    this.songS
      .getListSong(0, 3)
      .subscribe(data => this.handlerDataListSong(data))
    this.themeS
      .getListOfTheme(0, 3)
      .subscribe(data => this.handlerDataTheme(data))
    this.foodS
      .getListFoodPlace(0, 3)
      .subscribe(data => this.handlerDataListFood(data))
  }
  handlerDataLocation(data) {
    this.locationData = data.data.map(
      location => `${host_to_api}/public/${location.img_location}`
    )
  }
  handlerDataTheme(data) {
    this.themeData = data.data.map(
      themeData => `${host_to_api}/public/${themeData.img_theme}`
    )
  }

  handlerDataListSong(data) {
    this.songData = data.data.map(
      song => `${host_to_api}/public/${song.img_src}`
    )
  }
  bookingParty() {
    this.router.navigate(["/user/selectparty"])
  }
  handlerDataListFood(data) {
    this.foodsData = data.data.map(
      food => `${host_to_api}/public/${food.img_food}`
    )
  }
}
