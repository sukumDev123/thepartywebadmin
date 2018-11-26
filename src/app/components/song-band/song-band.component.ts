import { Component, OnInit } from "@angular/core"
import { SongInterface } from "../../interfaces/song.interface"
import { SongService } from "../../services/song/song.service"
import { StoreSService } from "../../services/store/store-s.service"
import { ListObject } from "src/app/store/actions/list-object.action"
import { reducer } from "../../store/index"
import { UploadImage } from "../../about_upload_imaage"

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: "app-song-band",
  templateUrl: "./song-band.component.html",
  styleUrls: ["./song-band.component.css"]
})
export class SongBandComponent implements OnInit {
  songBang: SongInterface
  selectedFile: ImageSnippet
  showImage: string = "/assets/picturestart.png"
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
    new UploadImage().processFile(imageInput).then(suc => {
      this.selectedFile = suc
      this.showImage = suc.src
    })
  }
  ngOnInit() {
    this.songBang = this.songDefault()
  }

  addSongBand() {
    this.songServer
      .saveSongBand(this.songBang, this.selectedFile.file)
      .subscribe(
        d => {
          this.songBang = this.songDefault()
          this.showImage = ""
          this.storeS.setHandlerMsg({
            message: d.message,
            class: "suc_msg",
            show: true,
            status: d.status
          })
        },
        e => {
          this.storeS.setHandlerMsg({
            message: e.error.message,
            class: "err_msg",
            show: true,
            status: e.status
          })
        }
      )
  }
}
