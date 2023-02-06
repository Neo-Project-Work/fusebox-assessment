import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  

  formGroup: FormGroup = this.fb.group ({
    email: new FormControl("", [Validators.required,
      Validators.pattern(
      '[a-zA-Z0-9.-]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}'
    ),]),
    password: new FormControl("", [Validators.required,Validators.minLength(8), Validators.pattern('^[+]?[0-9 ]+') ]),
  });

  constructor(@Inject(PLATFORM_ID) private platformId: {}, 
  private router: Router, 
  private authService: AuthService, 
  private fb: FormBuilder,
  private apiService: ApiService,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {}
  }

  submitForm() {
    if(this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(res => {
        if(res.status == 'success') {
          console.log(res);
          this.router.navigate(['/panic/send'])
        }
      })
    }else {
      alert ('Please Enter Correct Details');
    }
  }
}
