import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BoardContainerComponent } from './board-container/board-container.component';


const routes: Routes = [
  { path: '', component: BoardContainerComponent }
];

@NgModule({
  declarations: [
    BoardContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BoardModule { }
