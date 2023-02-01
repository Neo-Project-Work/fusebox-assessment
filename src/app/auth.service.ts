import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenParams } from './token-params';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken: string = "";
  constructor(private http: HttpClient) { }

  private Base_API = environment.Base_URL;

  //login set req

  login(email: string, password: string) {
    var data = { email, password }
    return this.http.post(this.Base_API, data, { headers: this.setHeader() } )
  }


  // TODO:
  // send a panic req  EndPoint: /panic/send

  //cancel panic req  EndPoint: /panic/cancel

  //get panic history  EndPoint: /panic/history
   // create a if statement to check accesstoken
  //  getPanicHistory () {
  //   if(this.accessToken) {
  //     this.setHeader().append('Authorization', 'Bearer' + this.accessToken)
  //    }
  //    return this.http.get(this.Base_API, { headers: this.setHeader()})
  //  }
 


      // setup error handling
  private handleError(error: any) {
    if (error instanceof Response) {
        let errMessage: any;
        try {
            errMessage = error.json().catch((err: any) => err);
        } catch (err) {
            errMessage = error.statusText;
        }
        return throwError(errMessage);
    }
    return throwError(error || 'server error');
  }


  // set up headers
  setHeader() {
    return new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json',
    });
  }
}
