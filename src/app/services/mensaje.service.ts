import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Mensaje } from '../models/mensaje';

import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class mensaje {
  
  private URL= 'http://localhost:3000/email';
  private HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
 
  enviar_mensaje(mensaje: Mensaje): Observable<number>{
    return this.http.post<number>(this.URL, mensaje, {headers:this.HttpHeaders});
  }
}
 