import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model:any={};

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.removeItem('user');
  }
  login(){
    
    // Validating the credentials

    if(this.model.username==='admin@example.com' && this.model.password ==='password'){

      // Used for authenticating routes
      localStorage.setItem('user',this.model.username); 
      
       this.router.navigate(['/form']);
      console.log('approved');
    }
    else{
      window.alert("Invalid credentials");
    }
  }

}
