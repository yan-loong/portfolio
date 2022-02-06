import { Injectable } from '@angular/core';
import { LanguageStore } from '@portfolio/data-access';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private router: Router,
    private languageStore: LanguageStore,
  ) {

  }
  navigateTo(route: Array<any>, options?: NavigationExtras): Promise<boolean> {
    return this.router.navigate([...route], options)
  }

  /**
    * @description Attach language name to a path and then navigate to an absolute path;
    * @param { Array<any> } route  An array of URL fragments or literal URL string 
    * @param { NavigationExtras } options 
    * @returns A Promise that resolves to true when navigation succeeds, to false when navigation fails, or is rejected on error.
    */
  navigateToAbsolute(route: Array<any> | string, options?: NavigationExtras): Promise<boolean> {
    const _isUrlFragment: boolean = Array.isArray(route);
    const _relativePath: string = _isUrlFragment ? (<Array<any>>route).join("/") : <string>route;
    const _absPath: string = this.attachLanguageNameToPath(_relativePath);

    return this.router.navigate([_absPath], options)
  }

  /**
   * @description attach language name to path
   * @param {string} path literal URL string 
   * @returns Absolute path including language name  
   */
  attachLanguageNameToPath(path: string): string {
    return `/${this.languageStore.activeLanguage.name}/${path}`
  }





}
