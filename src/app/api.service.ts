import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

  private Base_API = environment.Base_URL;

  login(data: any): Observable<any> {
    return this.http
      .post(`${this.Base_API}login`, data)
      .pipe(catchError(this.handleError));
  }

  sendPanic(data: any): Observable<any> {
    return this.http
      .post(`${this.Base_API}panic/send`, data)
      .pipe(catchError(this.handleError));
  }

  cancelPanic(data: any): Observable<any> {
    return this.http
      .post(`${this.Base_API}panic/cancel`, data)
      .pipe(catchError(this.handleError));
  }

  getPanicHistory(): Observable<any> {
    return this.http
      .get(`${this.Base_API}panic/history`)
      .pipe(catchError(this.handleError));
  }

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
}
