import { Component, OnInit } from "@angular/core"
import { SongInterface } from "../../interfaces/song.interface"

@Component({
  selector: "app-song-band",
  templateUrl: "./song-band.component.html",
  styleUrls: ["./song-band.component.css"]
})
export class SongBandComponent implements OnInit {
  songBang: SongInterface = {
    detail_band: "",
    name_band: "",
    price_band: 0,
    img_src: ""
  }

  constructor() {}

  ngOnInit() {}
}
