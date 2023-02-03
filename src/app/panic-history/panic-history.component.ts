import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-panic-history',
  templateUrl: './panic-history.component.html',
  styleUrls: ['./panic-history.component.scss']
})
export class PanicHistoryComponent {
  
  formGroup: FormGroup = this.fb.group ({
    panic_id: new FormControl("", [Validators.required]),
  }); 

  panicHistory: any = [];

  constructor(@Inject(PLATFORM_ID) private platformId: {},private fb: FormBuilder, private authService: ApiService, private router: Router, ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.getHistory();
    }
    
  }
  getHistory() {
    this.authService.getPanicHistory().subscribe(res => {
      console.log("firsr",res.data.panics);
      this.panicHistory.push(res.data.panics);
    });
  }
}
