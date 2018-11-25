import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { host_to_api } from "../../host"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class SongService {
  private host = host_to_api
  constructor(private http: HttpClient) {}
  saveSongBand(songBandData, image: File): Observable<any> {
    const formData = new FormData() // Currently empty
    formData.append("song", JSON.stringify(songBandData))
    formData.append("image", image)
    return this.http.post(`${this.host}/api/v1/song/admin/add/song`, formData)
  }
}
