import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Coberturas } from 'src/app/interface/coberturas';


@Injectable({
  providedIn: 'root'
})
export class CoberturasDATAService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "Coberturas/"

  constructor(private http:HttpClient) { }

  getList():Observable<Coberturas[]>{
    return this.http.get<Coberturas[]>(`${this.apiUrl}GetAllCoberturas`);
  }

  add(model:Coberturas):Observable<Coberturas>{
    return this.http.post<Coberturas>(`${this.apiUrl}CreateCobertura`,model);
  }

  update(idCobertura: number, model: Coberturas): Observable<Coberturas> {
    return this.http.put<Coberturas>(`${this.apiUrl}UpdateCobertura/${idCobertura}`, model);
  }
  
  delete(idCobertura: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}DeleteCobertura/${idCobertura}`);
  }
  
}
