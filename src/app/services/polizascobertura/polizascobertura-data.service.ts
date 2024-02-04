import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Polizascoberturas } from 'src/app/interface/polizascoberturas';

@Injectable({
  providedIn: 'root'
})
export class PolizascoberturaDATAService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "PolizasCoberturas/"

  constructor(private http:HttpClient) { }

  getList():Observable<Polizascoberturas[]>{
    return this.http.get<Polizascoberturas[]>(`${this.apiUrl}GetAllPolizasCoberturas`);
  }

  add(model:Polizascoberturas):Observable<Polizascoberturas>{
    return this.http.post<Polizascoberturas>(`${this.apiUrl}CreatePolizasCoberturas`,model);
  }

  update(idPolizaCobertura:number,model:Polizascoberturas):Observable<Polizascoberturas>{
    return this.http.put<Polizascoberturas>(`${this.apiUrl}UpdatePolizasCoberturas/${idPolizaCobertura}`,model);
  }

  delete(idPolizaCobertura:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}DeletePolizasCoberturas/${idPolizaCobertura}`);
  }
}
