import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aportelogro } from '../models/aportelogro';

@Injectable({
  providedIn: 'root'
})
export class AportesService {
  private URL='http://localhost:3000/api/auth';

  constructor(private http:HttpClient) { }

  getAporte(): Observable<any>{
    return this.http.get(this.URL+'/aportelogro')
  }
  getApo(id:String){
    return this.http.get(`${this.URL}/aportelogro/${id}`);
  }
  deleteAporte(id:String){
    return this.http.delete(`${this.URL}/aportelogro/delete/${id}`);
  }
  saveAporte(aporte:Aportelogro){
    return this.http.post(`${this.URL}/aportelogro/add/`,aporte);
  }
}
