import { Injectable } from '@angular/core';
import { Observable, Subscription, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Docente } from '../../models/Docente/docente';
import Swal from 'sweetalert2';
import { map } from 'jquery';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CU2Service {

  private HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private cu2Url: string = 'http://localhost:3000/iteracion1/gest_usu_part';
  private cu2Url2: string = 'http://localhost:3000/iteracion1/gest_usu_part/elim_user/';
  constructor(private http: HttpClient) { }
  getDocentesParticipantes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.cu2Url + '/list_part');
  }
  addPersona(docente: Docente): Observable<number>{
    return this.http.post<number>(this.cu2Url+'/add', docente, {headers:this.HttpHeaders});
  }
  eliminar_docente(id: number): Observable<number>{
    console.log(id);
    return this.http.put<number>(this.cu2Url2+id,{headers:this.HttpHeaders});
  }
  TraerDocenteParticipante(id:number): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.cu2Url + '/list_doc_part/'+id);
  }

  updateDocParticipante(docente: Docente, id:number):Observable<number>{
    return this.http.put<number>(this.cu2Url+'/upd_doc_part/'+id, docente, {headers:this.HttpHeaders});
  }
}
