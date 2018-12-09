import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { host_to_api } from "../../host"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class PartyService {
  private host = host_to_api
  constructor(private http: HttpClient) {}
  getAllPartyOfList(): Observable<any> {
    return this.http.get(`${this.host}/api/v1/party/all/list`)
  }
  getListOfHistory(start_location, end_lo, id_user): Observable<any> {
    return this.http.get(
      `${
        this.host
      }/api/v1/party/list/party?start_location=${start_location}&end_location=${end_lo}&id_user=${id_user}`
    )
  }
  addNewParty(party): Observable<any> {
    return this.http.post(`${this.host}/api/v1/party/add/party`, party)
  }
}
