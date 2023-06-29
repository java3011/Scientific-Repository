import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private apiUrl = "http://localhost:3001/user/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) {}

  create(user:any): Observable<User>{
    return this.http.post<User>(this.apiUrl + "InsertUser", JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any){
    let errorMessage = '';
   if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: $(error.status) \nMessage: $(error.message)`;
    }
    return throwError(errorMessage);
  }
}
