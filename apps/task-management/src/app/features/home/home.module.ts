import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from '@portfolio/ui';


const routes: Routes = [
  { path: '', component: HomeContainerComponent }
];

@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(routes),
    CardModule
  ]
})
export class HomeModule { }
