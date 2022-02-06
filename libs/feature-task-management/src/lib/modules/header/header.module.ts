import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LanguageSelectorModule } from '../language-selector/language-selector.module';
import { IconModule } from '@portfolio/ui';
import { TranslateModule } from '@ngx-translate/core';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    LanguageSelectorModule,
    MatRippleModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
