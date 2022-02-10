import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { InputModule, ButtonModule } from '@portfolio/ui';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    TranslateModule,
    ButtonModule,
  ],
  exports: [
    FormComponent
  ]
})
export class LoginModule { }
