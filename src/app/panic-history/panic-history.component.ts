import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-panic-history',
  templateUrl: './panic-history.component.html',
  styleUrls: ['./panic-history.component.scss'],
})
export class PanicHistoryComponent {

  formGroup: FormGroup = this.fb.group({
    panic_id: new FormControl('', [Validators.required]),
  });

  panicHistory: any = [];

  cancelArrsy: any = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: {},
    private fb: FormBuilder,
    private authService: ApiService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.getHistory();
    }
  }

  getHistory() {
    this.authService.getPanicHistory().subscribe((res) => {
      console.log('data', res.data.panics);
      console.log('data1', Object.keys(res.data.panics[0]));
      this.panicHistory.push(res.data.panics);
    });
  }

  cancelPanic() {
    this.authService.cancelPanic(this.formGroup.value).subscribe(res => {
      console.log(res);
      console.log('object',Object.keys(res));
      alert(res.message)
    })
  }

  // TODO
  // cancelPanicId(id:any) {
  //   var panic_id = document.querySelector<HTMLElement>("#panic_id");
  //   var result = this.panicHistory;
  //   result[0][0]['panic_id'] = result[0][0]['id'];
  //   delete result[0][0]['id'];
  //   this.cancelArrsy.push(result[0][0]);
  //   this.authService.cancelPanic(panic_id).subscribe(res => {
  //     result[0][0]['panic_id'] = panic_id;
  //     console.log('hoping',res);
        
  //   })
  //   console.log('result12',result[0][0]);
  //   alert('panic_id:' + " " + panic_id?.innerText);
  // }
}

