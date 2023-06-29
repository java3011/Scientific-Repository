import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterService {
  
  intercept(req:any,next:any){
    const token = localStorage.getItem('token');
    const tokenHe = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(tokenHe);
  }

  constructor() { }
}
