import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from './login-container/login-container.component';


const routes: Routes = [
  { path: '', component: LoginContainerComponent }
];

@NgModule({
  declarations: [
    LoginContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
