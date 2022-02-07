import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from '../layout/container/container.component';

const routes: Routes = [
  {
    path: ':lang',
    component: ContainerComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../features/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('../../features/registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
        loadChildren: () => import('../../features/not-found/not-found.module').then(m => m.NotFoundModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'ka',
    pathMatch: 'full'
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
