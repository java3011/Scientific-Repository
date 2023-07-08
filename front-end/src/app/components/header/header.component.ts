import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from 'src/app/services/case.service';
import { LoginService } from 'src/app/services/login.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private log: LoginService, private cas:CaseService, private route: Router, public meta: SearchService) { }
  
  find: string = '';
  caseList:string = '';

  ngOnInit(): void {
  }
  
  onLogOut():void{
    this.log.logOut();
  }
  
  isAut():boolean{
    if(!this.log.isAuth()){
      return false;
    }
    return true
  }
  
  search(type: string){
    this.meta.term = type;
    console.log(this.meta.term);
    this.meta.getLocation();
  }

 // isAuts(){
  // if(this.log.isAuth()){
  //    this.route.navigate(['']);
   // }else{
   //   this.route.navigate(['/private']);
   // }
   
  //}

//  search(){
   

    
    //this.find = user.filter(m => m.title.toLowerCase().includes(this.find.toLowerCase));
 // }
}
