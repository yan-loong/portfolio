import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isVisible = new BehaviorSubject<boolean>(false);

  constructor() { }


  get isVisible$(): Observable<boolean> {
    return this._isVisible.asObservable();
  }

  get isVisible(): boolean {
    return this._isVisible.getValue();
  }

  set isVisible(iv: boolean) {
    this._isVisible.next(iv)
  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  toggle() {
    this.isVisible = !this.isVisible
  }
}
