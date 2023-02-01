import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-send-panic',
  templateUrl: './send-panic.component.html',
  styleUrls: ['./send-panic.component.scss']
})
export class SendPanicComponent {

  constructor() {

  }

  onSubmit(data:any) {
    console.log(data);
  }
}
