import { Injectable } from "@angular/core"
import { host_to_api } from "../../host"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class FoodService {
  private host = host_to_api
  private pathBegin = `${this.host}/api/v1/food`
  constructor(private http: HttpClient) {}
  addNewFoodPlace(food, imgFile: File): Observable<any> {
    const formData = new FormData()
    formData.append("food", JSON.stringify(food))
    formData.append("foodImg", imgFile)
    return this.http.post(`${this.pathBegin}/user/add/food`, formData)
  }
  getListFoodPlace(start, end): Observable<any> {
    return this.http.get(
      `${this.pathBegin}/user/list/foods?start_food=${start}&end_food=${end}`
    )
  }
  deleteFoodPlace(id_food): Observable<any> {
    return this.http.delete(`${this.pathBegin}/user/food/${id_food}`)
  }
}
