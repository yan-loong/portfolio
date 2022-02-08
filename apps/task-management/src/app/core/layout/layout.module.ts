import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RoutingModule } from '../routing/routing.module';
import { featureHeaderModule, LoadingModule } from "@portfolio/feature-task-management"


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    featureHeaderModule,
    LoadingModule
  ],
  exports: [
    ContainerComponent,
  ]
})
export class LayoutModule { }
