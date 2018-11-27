import { Component, OnInit } from "@angular/core"
import { ImageSnippet, UploadImage } from "../../about_upload_imaage"
import { ThemeObjects } from "../../objects/theme.object"
import { ThemeService } from "../../services/theme/theme.service"
import { StoreSService } from "../../services/store/store-s.service"

@Component({
  selector: "app-theme",
  templateUrl: "./theme.component.html",
  styleUrls: ["./theme.component.css"]
})
export class ThemeComponent implements OnInit {
  selectedFile: ImageSnippet
  defaultImag = "/assets/picturestart.png"
  showImage: string = this.defaultImag
  theme: ThemeObjects
  constructor(private themeS: ThemeService, private _store: StoreSService) {}

  ngOnInit() {
    this.theme = new ThemeObjects()
  }
  processFile(imageInput: any) {
    new UploadImage().processFile(imageInput).then(suc => {
      this.selectedFile = suc
      this.showImage = suc.src
    })
  }
  addNewtheme() {
    this.themeS.addNewTheme(this.theme, this.selectedFile.file).subscribe(
      data => {
        this.theme = new ThemeObjects()
        this.showImage = this.defaultImag
        this._store.setHandlerMsg({
          message: data.message,
          class: "suc_msg",
          show: true,
          status: data.status
        })
      },
      e => {
        console.log("them L ", e)
        this._store.setHandlerMsg({
          message: e.error.message,
          class: "err_msg",
          show: true,
          status: e.status
        })
      }
    )
  }
}
