import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { FlagsModule } from "@portfolio/ui"



@NgModule({
  declarations: [
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    TranslateModule,
    FlagsModule
  ],
  exports: [
    LanguageSelectorComponent
  ]
})
export class LanguageSelectorModule { }
