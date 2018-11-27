import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { host_to_api } from "../../host"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class LocationService {
  private host = host_to_api
  constructor(private http: HttpClient) {}
  addNewLocation(location, img_file): Observable<any> {
    const formData = new FormData()
    formData.append("locationImg", img_file)
    formData.append("location", JSON.stringify(location))
    return this.http.post(
      `${this.host}/api/v1/location/admin/add/location`,
      formData
    )
  }
  getListLocation(start, end): Observable<any> {
    const urlToget = `${
      this.host
    }/api/v1/location/user/list/locations?start_location=${start}&end_location=${end}`
    return this.http.get(urlToget)
  }
  deleteLocation(id_location): Observable<any> {
    const deleteData = `${
      this.host
    }/api/v1/location/user/location/${id_location}`

    return this.http.delete(deleteData)
  }
}
