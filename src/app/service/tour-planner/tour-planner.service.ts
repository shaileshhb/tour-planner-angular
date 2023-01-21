import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TourPlannerService {

  private readonly BASEURL = `${environment.baseURL}`

  constructor(
    private _httpClient: HttpClient,
  ) { }

  createPlan(promptForm: any): Observable<any> {
    return this._httpClient.post<any>(`${this.BASEURL}/plan`, promptForm, {
      headers: new HttpHeaders({ 'Content-type': 'application/json' }),
      observe: "response",
    })
  }
}
