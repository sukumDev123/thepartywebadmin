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
    return this.http.post<any>(
      `${this.host}/api/v1/song/admin/add/song`,
      formData
    )
  }
  getListSong(start = 0, end = 1): Observable<any> {
    return this.http.get<any>(
      `${
        this.host
      }/api/v1/song/admin/songlistadmin?limit_start=${start}&limit_end=${end}`
    )
  }
  deleteSong(id_song): Observable<any> {
    return this.http.delete(`${this.host}/api/v1/song/admin/song/${id_song}`)
  }
}
