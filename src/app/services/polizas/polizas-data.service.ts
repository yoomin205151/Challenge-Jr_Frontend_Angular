import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Polizas } from 'src/app/interface/polizas';

@Injectable({
  providedIn: 'root'
})
export class PolizasDATAService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "Polizas/"

  constructor(private http:HttpClient) { }

  getList():Observable<Polizas[]>{
    return this.http.get<Polizas[]>(`${this.apiUrl}GetAllPolizas`);
  }

  add(model:Polizas):Observable<Polizas>{
    return this.http.post<Polizas>(`${this.apiUrl}CreatePolizas`,model);
  }

  update(idPoliza:number,model:Polizas):Observable<Polizas>{
    return this.http.put<Polizas>(`${this.apiUrl}UpdatePoliza/${idPoliza}`,model);
  }

  delete(idPoliza:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}DeletePoliza/${idPoliza}`);
  }
}
