import { Injectable } from '@angular/core';
import { Observable, Subscription, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
/*import { Archivo } from '../../models/subir_Archivo';*/
import Swal from 'sweetalert2';
import { map } from 'jquery';
import { catchError } from 'rxjs/operators';
import { Archivo } from '../models/archivo';

@Injectable({
  providedIn: 'root'
})

export class archivoServices {


  
  private HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url: string = 'http://localhost:3000/examen/';

  constructor(private http: HttpClient) { }

  getDocentesParticipantes(): Observable<Archivo[]> {
    return this.http.get<Archivo[]>(this.url + '/list_archivos');
  }

}
