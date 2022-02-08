import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from "@angular/common/http"
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(url: string, options?: any): Observable<HttpEvent<T>> {
    return this.httpClient.get<T>(url, options)
  }

  post<T>(url: string, body: any, options?: any): Observable<HttpEvent<T>> {
    return this.httpClient.post<T>(url, body, options)
  }

  delete<T>(url: string, options?: any): Observable<HttpEvent<T>> {
    return this.httpClient.delete<T>(url, options)
  }
}
