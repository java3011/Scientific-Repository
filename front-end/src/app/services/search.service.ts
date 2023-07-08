import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  term!: string;
  casos : any;
  
  getLocation(){
    this.http.get(`http://localhost:3001/case/ListarCases/?query=${this.term}`).subscribe((res : any ) => {
      console.log(res);
      this.casos = res;
      console.log(this.casos);
    });
  }

}
