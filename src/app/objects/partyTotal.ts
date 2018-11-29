import {
  LocationShow,
  FoodToShow,
  ThemeShow,
  SongToShow
} from "../interfaces/toShow"
export class SongToShowO implements SongToShow {
  id_song = 0
  img_src = ""
  name_song = ""
  price_song = 0
  constructor(
    id_song: number = 0,
    img_src: string = "",
    name_song = "",
    price_song = 0
  ) {
    this.id_song = id_song
    this.img_src = img_src
    this.name_song = name_song
    this.price_song = price_song
  }
}
export class FoodToShowO implements FoodToShow {
  id_food = 0
  img_food = ""
  name_food = ""
  price_food = 0
  constructor(id_food = 0, img_food = "", name_food = "", price_food = 0) {
    this.id_food = id_food
    this.img_food = img_food
    this.name_food = name_food
    this.price_food = price_food
  }
}
export class ThemeToShowO implements ThemeShow {
  id_theme = 0
  img_theme = ""
  name_theme = ""
  price_theme = 0
  constructor(id_theme = 0, img_theme = "", name_theme = "", price_theme = 0) {
    this.id_theme = id_theme
    this.img_theme = img_theme
    this.name_theme = name_theme
    this.price_theme = price_theme
  }
}
export class LocationToShowO implements LocationShow {
  id_location = 0
  img_location = ""
  name_location = ""
  price_location = 0
  constructor(
    id_location = 0,
    img_location = "",
    name_location = "",
    price_location = 0
  ) {
    this.id_location = id_location
    this.img_location = img_location
    this.name_location = name_location
    this.price_location = price_location
  }
}

export class PartyTotal {
  name_party: string = ""
  song: SongToShow
  theme: ThemeShow
  location: LocationShow
  food: FoodToShow
  price_total: number = 0
  id_user = 0
  start_time = 0

  constructor(
    name_party = "",
    song: SongToShow = new SongToShowO(),
    theme: ThemeShow = new ThemeToShowO(),
    food: FoodToShow = new FoodToShowO(),
    location: LocationShow = new LocationToShowO(),
    price_total = 0,
    id_user = 0,
    start_time = 0
  ) {
    this.name_party = name_party
    this.song = song
    this.theme = theme
    this.food = food
    this.location = location
    this.price_total = price_total
    this.id_user = id_user
    this.start_time = start_time
  }
}
