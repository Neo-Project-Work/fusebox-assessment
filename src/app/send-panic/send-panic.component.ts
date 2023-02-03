import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-send-panic',
  templateUrl: './send-panic.component.html',
  styleUrls: ['./send-panic.component.scss']
})
export class SendPanicComponent {
  formGroup: FormGroup = this.fb.group ({
    longitude: new FormControl("", [Validators.required]),
    latitude: new FormControl("", [Validators.required]),
    panic_type: new FormControl("", [Validators.required]),
    details: new FormControl("", [Validators.required]),
  });


  constructor(@Inject(PLATFORM_ID) private platformId: {}, 
    private router: Router, 
    private authService: AuthService, 
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {}
  }

  submitForm() {
    if(this.formGroup.valid) {
      this.authService.sendPanic(this.formGroup.value).subscribe(res => {
        if(res.status == 'success') {
          console.log(res);
          this.router.navigate(['/panic/history'])
        }
      })
    }
  }
}
