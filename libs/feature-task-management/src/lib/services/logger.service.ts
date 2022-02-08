import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private _commonClasses: Array<string> = ['font-primary-medium', 'uppercase', 'upper-case', 'text-xs']
  private _commonConfig: MatSnackBarConfig = { duration: 3000 }

  constructor(
    private matSnackBar: MatSnackBar
  ) {

  }

  logSuccess(message: string) {
    const config: MatSnackBarConfig = {
      panelClass: ['bg-positive', ...this._commonClasses],
      ...this._commonConfig
    }
    this.matSnackBar.open(message, undefined, config)
  }


  logError(message: string) {
    const config: MatSnackBarConfig = {
      panelClass: ['bg-negative', ...this._commonClasses],
      ...this._commonConfig
    }
    this.matSnackBar.open(message, undefined, config)
  }
}
