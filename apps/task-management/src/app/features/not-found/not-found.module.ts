import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundContainerComponent } from './not-found-container/not-found-container.component';


const routes: Routes = [
  { path: '', component: NotFoundContainerComponent }
];

@NgModule({
  declarations: [
    NotFoundContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NotFoundContainerComponent
  ]
})
export class NotFoundModule { }
