import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlagComponent } from './flag/flag.component';



@NgModule({
  declarations: [
    FlagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlagComponent
  ]
})
export class FlagsModule { }
