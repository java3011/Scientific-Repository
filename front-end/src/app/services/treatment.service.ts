import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Treatment } from '../interfaces/treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

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

  GetTreatment():Observable<any>{
    return this.http.get(`${environment.apiUrl}/ListarTreatment`);
  }
  PostTreatment(lista:Treatment):Observable<any>{
    return this.http.post(`${environment.apiUrl}/InsertTreatment`,JSON.stringify({"treatmentinfo":lista.treatmentinfo ,"numberofbeams":lista.numberofbeams}),this.HttpUploadOptions);

  }
}
