import { Component, OnInit } from "@angular/core"
import { SongInterface } from "../../interfaces/song.interface"
import { SongService } from "../../services/song/song.service"
import { StoreSService } from "../../services/store/store-s.service"

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: "app-song-band",
  templateUrl: "./song-band.component.html",
  styleUrls: ["./song-band.component.css"]
})
export class SongBandComponent implements OnInit {
  songBang: SongInterface = this.songDefault()
  selectedFile: ImageSnippet
  constructor(private songServer: SongService, private storeS: StoreSService) {}

  songDefault() {
    return {
      detail_band: "",
      name_band: "",
      price_band: 0,
      img_src: ""
    }
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0]
    const reader = new FileReader()

    reader.addEventListener("load", (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file)
      console.log(this.selectedFile)
    })

    reader.readAsDataURL(file)
  }
  ngOnInit() {
    this.selectedFile.src = ""
  }
  addSongBand() {
    this.songServer
      .saveSongBand(this.songBang, this.selectedFile.file)
      .subscribe(
        d => {
          console.log(d)
          this.songBang = this.songDefault()
          this.selectedFile.src = ""
          this.storeS.setHandlerMsg({
            message: d.message,
            class: "suc_msg",
            show: true,
            status: d.status
          })
        },
        e => {
          this.storeS.setHandlerMsg({
            message: e.message,
            class: "err_msg",
            show: true,
            status: e.status
          })
        }
      )
  }
}
