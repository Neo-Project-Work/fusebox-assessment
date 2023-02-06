import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private Base_API = environment.Base_URL;
  

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private apiService:ApiService ) {
  }


  login(data:any) {
    return this.apiService.login(data).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('token', response.data.api_access_token);
      })
    );
  }

  sendPanic(data: any): Observable<any> { 
    return this.http.post(`${this.Base_API}panic/send`, data);
  }

  cancelPanic(panic_id:string): Observable<any> {
    return this.http.post(`${this.Base_API}panic/cancel`, panic_id);
  }

}
