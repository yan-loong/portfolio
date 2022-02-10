import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { UserInfoStore } from '@portfolio/data-access';
import { BehaviorSubject, delay, filter, mapTo, Observable, of, Subject, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private userInfoStore: UserInfoStore
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.userInfoStore.isAuthorize$
  }

}
