import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenParams } from '../token-params';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;


  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {

  }

  // TOD: To check if the form is filled in with neccessary requires
  submitForm() {
    this.authService.login(this.email,this.password).subscribe( 
      data => {
        console.log(data);
      },
    )
  };

  
}
