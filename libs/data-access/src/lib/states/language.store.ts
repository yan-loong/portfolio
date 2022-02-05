import { Injectable } from "@angular/core";
import { Language, Languages } from "@portfolio/common"
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LanguageStore {

    readonly languages: ReadonlyArray<Language> = [
        { id: Languages.EN, name: "en" },
        { id: Languages.KA, name: "ka" }
    ];

    readonly defaultLanguage: Language = this.languages[1];

    private readonly _activeLanguage: BehaviorSubject<Language> = new BehaviorSubject(this.defaultLanguage)

    constructor() {

    }

    get activeLanguage$() {
        return this._activeLanguage.asObservable();
    }

    get activeLanguage() {
        return this._activeLanguage.getValue();
    }

    set activeLanguage(l: Language) {
        this._activeLanguage.next(l)
    }
}