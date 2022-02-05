import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language, Languages } from "@portfolio/common"
import { LanguageStore } from "@portfolio/data-access";
import { getPathName, replaceState } from "@portfolio/util"

@Injectable({
  providedIn: 'root'
})
export class LanguageService {


  constructor(
    private languageStore: LanguageStore,
    private translateService: TranslateService
  ) {

  }

  init() {
    const langFromURL: Language | undefined = this.getLanguageByURL()

    if (langFromURL && this.isLanguageExist(langFromURL.name)) {
      this.activateLanguage(langFromURL);
    }

  }


  isLanguageExist(langName: string): boolean {
    return this.languageStore.languages.some(_lang => _lang.name == langName.toLocaleLowerCase())
  }


  getLanguageByURL(): Language | undefined {
    const [empty, currentLangName, ...currentRoute] = getPathName().split("/");

    return this.getLanguageByName(currentLangName);
  }

  getLanguageByName(langName: string): Language | undefined {
    return this.languageStore.languages.find(_lang => _lang.name == langName.toLocaleLowerCase())
  }

  getLanguageByID(id: Languages): Language | undefined {
    return this.languageStore.languages.find(_lang => _lang.id == id)
  }

  activateLanguage(lang: Language) {
    if (this.languageStore.activeLanguage.id === lang.id) {
      return
    }
    else {
      this.translateService.use(lang.name)
      this.languageStore.activeLanguage = lang;
      this.updateUrlByLanguage(lang);
    }
  }

  updateUrlByLanguage(lang: Language) {
    const [empty, currentLangName, ...currentRoute] = getPathName().split("/");
    const newPathName: string = [empty, lang.name, ...currentRoute].join("/");

    replaceState(newPathName)
  }

}

