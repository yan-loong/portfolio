import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private _commonClasses: Array<string> = ['font-primary-medium', 'uppercase', 'upper-case', 'text-xs']
  private _commonConfig: MatSnackBarConfig = { duration: 3000 }

  constructor(
    private translateService: TranslateService,
    private matSnackBar: MatSnackBar
  ) {

  }

  /**
   * @description log success message
   * @param message  The message to show in the snackbar.
   * @param shoudTranslate shoud use translate service
   */
  logSuccess(message: string, shoudTranslate: boolean = true) {
    const config: MatSnackBarConfig = {
      panelClass: ['bg-positive', ...this._commonClasses],
      ...this._commonConfig
    }

    message = shoudTranslate ? this.translateService.instant(message) : message;

    this._log(message, config);
  }

  /**
   * @description log error message
   * @param message  The message to show in the snackbar.
   * @param shoudTranslate shoud use translate service
   */
  logError(message: string, shoudTranslate: boolean = true) {
    const config: MatSnackBarConfig = {
      panelClass: ['bg-negative', ...this._commonClasses],
      ...this._commonConfig
    }

    message = shoudTranslate ? this.translateService.instant(message) : message;
    this._log(message, config);
  }

  /**
 * @description log message depends on config
 * @param message  The message to show in the snackbar.
 * @param config  Configuration used when opening a snack-bar.
 */
  private _log(message: string, config: MatSnackBarConfig) {
    this.matSnackBar.open(message, undefined, config)
  }

}
