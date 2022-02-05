import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Language } from '@portfolio/common';
import { LanguageStore } from '@portfolio/data-access';
import { Observable } from 'rxjs';
import { LanguageService } from '../language.service';

@Component({
  selector: 'feature-task-management-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent implements OnInit {

  activeLanguage$: Observable<Language>;

  constructor(
    private languageService: LanguageService,
    public languageStore: LanguageStore
  ) {
    this.activeLanguage$ = this.languageStore.activeLanguage$
  }

  ngOnInit(): void {
  }

  changeLanguage(lang: Language) {
    this.languageService.activateLanguage(lang)
  }

}
