import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '@portfolio/common';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpService
  ) { }

  login(data: Credentials): Observable<HttpEvent<any>> {
    return this.httpService.post<any>('/api/user/registration', data)
  }
}
