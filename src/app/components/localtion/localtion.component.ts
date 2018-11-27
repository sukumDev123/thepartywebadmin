import { Component, OnInit } from "@angular/core"
import { LocationModel } from "../../objects/location.object"
import { UploadImage, ImageSnippet } from "../../about_upload_imaage"
import { LocationService } from "../../services/location/location.service"
import { StoreSService } from "../../services/store/store-s.service"

@Component({
  selector: "app-localtion",
  templateUrl: "./localtion.component.html",
  styleUrls: ["./localtion.component.css"]
})
export class LocaltionComponent implements OnInit {
  location: LocationModel
  selectedFile: ImageSnippet
  defaultImag = "/assets/picturestart.png"
  showImage: string = this.defaultImag
  constructor(
    private locationServer: LocationService,
    private _store: StoreSService
  ) {}

  ngOnInit() {
    console.log(this.location)
    this.location = new LocationModel()
  }
  processFile(imageInput: any) {
    new UploadImage().processFile(imageInput).then(suc => {
      this.selectedFile = suc
      this.showImage = suc.src
    })
  }
  addNewLocation() {
    // console.log(this.location)
    this.locationServer
      .addNewLocation(this.location, this.selectedFile.file)
      .subscribe(
        locations => {
          this.location = new LocationModel()
          this.showImage = this.defaultImag
          this._store.setHandlerMsg({
            message: locations.message,
            class: "suc_msg",
            status: locations.status,
            show: true
          })
        },
        err => {
          const errorMsg = err.error.message
          const statusMsg = err.error.status ? err.error.status : err.status
          this._store.setHandlerMsg({
            message: errorMsg,
            status: statusMsg,
            show: true,
            class: "err_msg"
          })
        }
      )
  }
}
