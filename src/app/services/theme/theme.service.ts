import { Injectable } from "@angular/core"
import { host_to_api } from "../../host"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private host = host_to_api
  private pathBegin = `${this.host}/api/v1/theme`
  constructor(private _http: HttpClient) {}
  addNewTheme(theme, img: File): Observable<any> {
    const formData = new FormData()
    formData.append("theme", JSON.stringify(theme))
    formData.append("themeImg", img)
    return this._http.post(`${this.pathBegin}/user/add/theme`, formData)
  }
  getListOfTheme(start, end): Observable<any> {
    return this._http.get(
      `${this.pathBegin}/user/list/themes?start_theme=${start}&end_theme=${end}`
    )
  }
  deleteOfTheme(id_theme): Observable<any> {
    return this._http.delete(`${this.pathBegin}/user/theme/${id_theme}`)
  }
}
