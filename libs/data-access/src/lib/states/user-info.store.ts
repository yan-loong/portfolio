import { Injectable } from "@angular/core";
import { User } from "@portfolio/common";
import { BehaviorSubject, filter, Observable, of, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserInfoStore {

    private readonly _userInfo: BehaviorSubject<User> = new BehaviorSubject<User>(null!);

    constructor() { }

    get userInfo$(): Observable<User> {
        return this._userInfo.asObservable();
    }

    set userInfo(_user: User) {
        this._userInfo.next(_user);
    }

    get isAuthorize$(): Observable<boolean> {
        return this._userInfo
            .pipe(
                filter(_ui => _ui !== null),
                switchMap(_ui => {
                    if (_ui) {
                        return of(true);
                    }
                    else {
                        return of(false)
                    }
                })
            )
    }
}