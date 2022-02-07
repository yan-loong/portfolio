import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import { CardModule } from '@portfolio/ui';
import { featureRegistrationModule } from '@portfolio/feature-task-management';


const routes: Routes = [
  { path: '', component: RegistrationContainerComponent }
];

@NgModule({
  declarations: [
    RegistrationContainerComponent
  ],
  imports: [
    CommonModule,
    featureRegistrationModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule { }
