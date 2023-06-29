import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alg } from '../interfaces/alg';

@Injectable({
  providedIn: 'root'
})
export class AlgService {
  constructor(private http:HttpClient) { }

  HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
    }
    ),
  };

  GetAlg():Observable<any>{
    return this.http.get(`${environment.apiUrl}/ListarAlg`);
  }
  PostAlg(lista:Alg):Observable<any>{
    return this.http.post(`${environment.apiUrl}/InsertAlg`,JSON.stringify({"algorithminfo":lista.algorithminfo ,"algorithmfile":lista.algorithmfile}),this.HttpUploadOptions);

  }
}
