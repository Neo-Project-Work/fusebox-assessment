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
    return this.http.post(
      `${this.Base_API}login`, data);
  }
  sendPanic(data: any): Observable<any> {
    return this.http.post(`${this.Base_API}panic/send`, data);
  }

  cancelPanic(panic_id: string): Observable<any> {
    return this.http.post(`${this.Base_API}panic/cancel`, panic_id);
  }

  getPanicHistory(): Observable<any> {
    return this.http.get(`${this.Base_API}panic/history`);
  }
}
