import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@portfolio/common';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class RegistrationService {

  constructor(
    private httpService: HttpService
  ) { }

  registration(user: User): Observable<HttpEvent<any>> {
    return this.httpService.post<any>('/api/user/registration', user)
  }
}
