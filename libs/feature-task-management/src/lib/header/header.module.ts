import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LanguageSelectorModule } from '../language-selector/language-selector.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,    
    LanguageSelectorModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
