import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import swal from 'sweetalert2';

declare var function1:any;
declare var function2:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User= new User(); 
  public identity: any;

  
  constructor(
    private  authService:AuthService,
    private router: Router
    
  ) { }

  ngOnInit() { 
    
  
  }
   login(){ 
    
    
     console.log(this.users);
     this.authService.signin(this.users)
     .subscribe(
       (res:any)=>{
         console.log(res);
         swal.fire(
          'Credenciales exitosos!',
          'Bienvenidos',
          'success') 
         localStorage.setItem('token', res.accessToken);
         this.router.navigate(['/dashboard']);
       }
     )

   }
   regis(){
     
   }  

   
   
}
