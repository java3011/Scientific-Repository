import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
user = {
 Email: '',
 userPassword: ''
}

  constructor(private login: LoginService, private route:Router) {}

  ngOnInit(): void {
    if(this.login.verifyLooged()){
      this.route.navigate(['private']).then(()=>{
        window.location.reload();
      })
    }
  }
  
  logIn(){
    //console.log(this.user);
    this.login.singin(this.user).subscribe((res:any) => {
      //console.log(res);
      localStorage.setItem('token', res.token);
      this.route.navigate(['/private']);
    })
  }
}
