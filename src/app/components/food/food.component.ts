import { Component, OnInit } from "@angular/core"
import { FoodModel } from "../../objects/food.object"
import { FoodService } from "../../services/food/food.service"
import { StoreSService } from "../../services/store/store-s.service"
import { UploadImage, ImageSnippet } from "../../about_upload_imaage"

@Component({
  selector: "app-food",
  templateUrl: "./food.component.html",
  styleUrls: ["./food.component.css"]
})
export class FoodComponent implements OnInit {
  food: FoodModel
  showImage: string = ""
  selectedFile: ImageSnippet
  defaultPath = "/assets/picturestart.png"
  constructor(
    private foodService: FoodService,
    private _store: StoreSService
  ) {}

  ngOnInit() {
    this.food = new FoodModel("", "", 0, "")
    this.showImage = this.defaultPath
  }
  addNewfood() {
    this.foodService
      .addNewFoodPlace(this.food, this.selectedFile.file)
      .subscribe(
        data => {
          this.food = new FoodModel("", "", 0, "")
          this.showImage = this.defaultPath
          this._store.setHandlerMsg({
            message: data.message,
            class: "suc_msg",
            show: true,
            status: data.status
          })
        },
        e => {
          this._store.setHandlerMsg({
            message: e.error.message,
            class: "suc_msg",
            show: true,
            status: e.status
          })
        }
      )
  }
  processFile(imageInput: any) {
    new UploadImage().processFile(imageInput).then(suc => {
      this.selectedFile = suc
      this.showImage = suc.src
    })
  }
}
